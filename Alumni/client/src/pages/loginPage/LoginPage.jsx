import './login.css'
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="registration">
            <div className="container login">
                <form className="login-form" action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <lebel htmlFor="email"></lebel>
                        <input type="text" className='input-field' placeholder="Enter Your Email"/>
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
                            <div className='new-user'>
                                <span>Not a member?</span>
                                <NavLink className="nav-link" to="/registration">Registration</NavLink>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default LoginPage;