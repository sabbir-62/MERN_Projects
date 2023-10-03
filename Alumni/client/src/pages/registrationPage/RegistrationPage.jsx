// import section
import './registration.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const RegistrationPage = () => {
    // Initial state
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirmPassword: ""
    })

    // set state value
    const setValues = (key, value) => {
        setState({
          ...state,
          [key]: value,
        });
      };

    // push data into database from registration page using fetch api
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, phone, role, password, confirmPassword} = state;

        // backend api endpoint
        const url = "http://localhost:8000/api/v1/registration";

        // post data using fetch api
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, role, password, confirmPassword
            })
        })
       .then((response) => response.json())
       .then((data) => {
            if(data.message){
                console.log(data.message)
            }
            else{
                console.log("no message")
            }
       })
       .catch((error) => {
        console.log(error)
       })
        
       // reset form field value with empty
        setState({
          name: '',
          email: '',
          phone: '',
          role: '',
          password: '',
          confirmPassword: ''
        });
    }

    // const handleClick = () => {
    //     const {name, email, phone, role, password, confirmPassword} = state;
        
    // }



    return (
        <div className="registration">
            <div className="container registration-card">
                <form className="registration-form" method='POST' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" className='input-field' autoComplete='off' value={state.name} onChange={(e) => {setValues("name", e.target.value)}} placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" name= "email" className='input-field' autoComplete='off' value={state.email} onChange={(e) => {setValues("email", e.target.value)}} placeholder="Enter Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone"></label>
                        <input type="tel" name='phone' className='input-field' autoComplete='off' value={state.phone} onChange={(e) => {setValues("phone", e.target.value)}} placeholder="Enter Your Mobile Number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="role"></label>
                        <input type="text" name='role' className='input-field' autoComplete='off' value={state.role} onChange={(e) => {setValues("role", e.target.value)}} placeholder="Enter Your Role"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="text" name='password' className='input-field' autoComplete='off' value={state.password} onChange={(e) => {setValues("password", e.target.value)}} placeholder="Enter Your Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword"></label>
                        <input type="text" name='confirmPassword' className='input-field' autoComplete='off' value={state.confirmPassword} onChange={(e) => {setValues("confirmPassword", e.target.value)}} placeholder="Enter Your Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <div className="button">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <NavLink className="nav-link" to="/login">I am already registered</NavLink>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default RegistrationPage;