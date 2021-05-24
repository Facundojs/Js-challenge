import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function UserLoggedNav({user}) {
    return (
        <>
            <NavLink to="/" className="navbar-brand" href="#">
                {`${user.first_name} ${user.last_name}`}
            </NavLink>
            <NavLink
                className="nav-link" activeClassName="selected" to="/"
                onClick={() => {
                    cookies.remove('userLogged');
                    window.location.reload();
                }}
                >
                Logout
            </NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/newoperation">
                New operation 
            </NavLink>
        </>         
    )
}