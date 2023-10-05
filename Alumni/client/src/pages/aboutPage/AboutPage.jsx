import { useEffect } from 'react';
import './aboutPage.css'

const AboutPage = () => {

    const callAboutPage = async() => {
        const url = "http://localhost:8000/api/v1/about";

        // post data using fetch api
        const res  = await (await fetch(url)).json()
       console.log(res.result)
    }


    useEffect(() => {
        callAboutPage();
    },[])

    return (
        <div className="container about">
            <div className="row about-card">
                <div className="heading">
                    <h1>Md Sabbir Hossain</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li>
                                Name :
                            </li>
                            <li>
                                Email :
                            </li>
                            <li>
                                Phone :
                            </li>
                            <li>
                                Role :
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>
                                Sabbir Hossain
                            </li>
                            <li>
                                sabbirhstuece@gmail.com
                            </li>
                            <li>
                                01729892494
                            </li>
                            <li>
                                Full Stack Web Developer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default AboutPage;