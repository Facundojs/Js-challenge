import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
// import ValidationError from '../components/ValidationError'
const cookies = new Cookies();

export default function Register() {
    const user_name = useRef();
    const user_surname = useRef();
    const user_email = useRef();
    const user_password = useRef();
    const [registerErrors, setRegisterErrors] = useState([]);
    const [connectionError, setConnectionError] = useState()
    const REGISTER_URL = "http://localhost:3010/api/v1/users/register";
    const userCookie = cookies.get('userLogged');

    useEffect(() => {
        if (userCookie) {
            window.location.href = '/';
        }
    })

    async function postData(first_name, last_name, email, password, API_URL) {
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        }
        const post = await fetch(API_URL, fetchConfig);
        const res = await post.json();
        console.log(res);
        if (res.errors){
            return setRegisterErrors(res.errors)
        }
        if (!res.errors && !res.error) {
            return window.location.href = "/login"
        }
        if (res.error) {
            return setConnectionError(res.error.msg)
        }
    }
    console.log(connectionError);
    return (
        <div className="container-lg mt-4 bg-light rounded border border-secondary">
            <form
                className="inputs-container p-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    postData(
                        user_name.current.value,
                        user_surname.current.value,
                        user_email.current.value,
                        user_password.current.value,
                        REGISTER_URL
                    )
                }}
            >
                <h1 className="mb-4">Register</h1>
                <div className="form-floating mb-3 margin-auto w-50">
                    <input ref={user_name} type="text" className="form-control" id="floatingInput"
                        placeholder="First name" />
                    <label htmlFor="floatingInput">First name</label>
                </div>
                <div className="form-floating mb-3 margin-auto w-50">
                    <input ref={user_surname} type="text" className="form-control" id="floatingInput" placeholder="Mypassword"/>
                    <label htmlFor="floatingInput">Last name</label>
                </div>
                <div className="form-floating mb-3 margin-auto w-50">
                    <input ref={user_email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 margin-auto w-50">
                    <input ref={user_password} type="password" className="form-control" id="floatingInput" placeholder="Mypassword"/>
                    <label htmlFor="floatingInput">Password</label>
                </div>
                {
                    (registerErrors.errors &&
                        <div className="container w-50 mx-0 mt-3 validations alert alert-danger">
                        
                        {registerErrors.errors.map((err, key) => {
                            console.log('ERRORS EN MAP');
                            return (
                                <span key={key} className="w-50 p-2">{`${err.msg}`}</span>
                                )
                            })}
                        </div>
                    )
                }
                {
                    (connectionError &&
                        (
                        <div className="container w-50 mx-0 mt-3 validations alert alert-danger">
                            {connectionError}
                        </div>
                        )
                    )
                }
                <button className="btn btn-sm btn-primary p-3 w-25 m-2 margin-auto" type="submit">Register</button>
                    <h3 className="m-2"><Link className="link-secondary" to="/login">Login</Link></h3>
            </form>
        </div>
    )
}