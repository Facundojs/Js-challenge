import Cookies from 'universal-cookie';
import NoLoggedHome from '../components/NoLoggedHome'
import LastOpsTable from '../components/LastOpsTable'
export default function Home() {
    const cookies = new Cookies();
    const userCookie = cookies.get('userLogged');
    if (!userCookie) {
        return (
            <NoLoggedHome />
        )
    } else {
        return (
            <div className="container-fluid w-75">
                <LastOpsTable
                    user={userCookie}
                />    
            </div>
        )
    }
}
