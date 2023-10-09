import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import './aboutPage.css'

const AboutPage = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        role: ""
    })

    const callAboutPage = async() => {
        const cookie = await Cookies.get("myCookie");
        const url = "http://localhost:8000/api/v1/about";
        // post data using fetch api
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               cookie
            }),
           
        })
       .then((response) => response.json())
       .then((data) => {
            if(data.message){
                setState({
                    name:data.user.name,
                    email: data.user.email,
                    phone: data.user.phone,
                    role: data.user.role
                })
            }
            else{
                alert("Something went wrong!")
            }
       })
       .catch((error) => {
        console.log(error)
       })
      
      
    }


    useEffect(() => {
        callAboutPage();
    },[])

    return (
        <div className="container about">
            <div className="row about-card">
                <div className="heading">
                    <h1>{state.name}</h1>
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
                                {state.name}
                            </li>
                            <li>
                                {state.email}
                            </li>
                            <li>
                                {state.phone}
                            </li>
                            <li>
                                {state.role}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default AboutPage;