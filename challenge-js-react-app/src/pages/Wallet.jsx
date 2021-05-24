import Cookies from 'universal-cookie';
import { useEffect } from 'react'
export default function Wallet() {
    const cookies = new Cookies();
    const userCookie = cookies.get('userLogged');
    useEffect(() => {
        if (!userCookie) {
            window.location.href = '/login';
        }
    })
    return (
        <>
            
        </>
    )
}