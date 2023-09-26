import './registration.css'
import { NavLink } from 'react-router-dom';

const RegistrationPage = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="registration">
            <div className="container">
                <form className="form" action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <lebel htmlFor="name"></lebel>
                        <input type="text" className='input-field'  placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group">
                        <lebel htmlFor="email"></lebel>
                        <input type="text" className='input-field' placeholder="Enter Your Email"/>
                    </div>
                    <div className="form-group">
                        <lebel htmlFor="phone"></lebel>
                        <input type="tel" className='input-field' placeholder="Enter Your Mobile Number"/>
                    </div>
                    <div className="form-group">
                        <lebel htmlFor="password"></lebel>
                        <input type="text" className='input-field' placeholder="Enter Your Password"/>
                    </div>
                    <div className="form-group">
                        <lebel htmlFor="cpassword"></lebel>
                        <input type="text" className='input-field' placeholder="Enter Your Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <div className="button">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <NavLink className="nav-link" to="/login">I am already register</NavLink>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default RegistrationPage;