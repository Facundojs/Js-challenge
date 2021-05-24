import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function Login() {
    const GET_TOKEN_URL = "http://localhost:3010/api/v1/users/login";
    const GET_USER_URL = "http://localhost:3010/api/v1/users/getuser"
    const userEmail = useRef();
    const userPassword = useRef();
    const userCookie = cookies.get('userLogged');
    const [getTokenRes, setGetTokenRes] = useState('');
    const [, setError] = useState();
    useEffect(() => {
        if (userCookie) {
            window.location.href = '/';
        }
    })
    async function getToken(email, password, tokenUrl) {
        const body = JSON.stringify({
            email,
            password
        });
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body,
        };
        try {
            const response = await fetch(tokenUrl, fetchConfig);
            const data = await response.json();
            const { token } = data;
            console.log(token);
            if (data.error) {
                setGetTokenRes(data.error.msg)
            }
            getUser(token, GET_USER_URL)

        } catch (err) {
            setError('There was an error in the conection')
        }
    }
    console.log(getTokenRes);
    async function getUser(token, getUserUrl) {
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        };
        const res = await fetch(getUserUrl, fetchConfig);
        const data = await res.json();
        const userLogged = data.authData.user;
        cookies.set('userLogged', userLogged, { path: '/' })
        window.location.href = '/';
    }
    return (
        <div className="container-lg mt-4 p-5 bg-light rounded border border-secondary">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getToken(userEmail.current.value, userPassword.current.value, GET_TOKEN_URL)
                }}
                >
                <div className="form-floating mb-4 margin-auto w-50">
                    <input ref={userEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 margin-auto w-50">
                    <input ref={userPassword} type="password" className="form-control" id="floatingInput" placeholder="Mypassword"/>
                    <label htmlFor="floatingInput">Password</label>
                </div>
                {
                    getTokenRes &&
                    <div className="container w-50 mt-4 mb-3 validations alert alert-danger centered">
                        <span className="p-2 centered">{getTokenRes}</span>
                    </div>
                }
                <button className="btn btn-sm btn-primary p-3 w-25 m-2 margin-auto" type="submit">Join</button>
                    <h3 className="m-2"><Link className="link-secondary" to="/register">Register</Link></h3>
            </form>
        </div>
    )
}