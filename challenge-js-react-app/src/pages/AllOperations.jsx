import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import AllOperationsTable from '../components/AllOperationsTable';
export default function AllOperations() {
    const cookies = new Cookies();
    const userCookie = cookies.get('userLogged');
    if (!userCookie) {
        return (
            window.location.href = '/login'
        )
    } else {
        return (
            <div className="container-fluid w-75">
                <AllOperationsTable
                    user={userCookie}
                />    
            </div>
        )
    }
}