import { NavLink } from 'react-router-dom'
import UserLoggedNav from './UserLoggedNav'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function Header() {
    const userCookie = cookies.get('userLogged');
    return (
        <header className="p-0">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-xl">
                    <NavLink to="/" className="navbar-brand" href="#">JS CHALLENGE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                (userCookie &&
                                    <UserLoggedNav
                                    user ={userCookie}
                                    />
                                ) ||
                                <NavLink
                                    className="nav-link" activeClassName="selected" to="/login"
                                    >
                                    Login
                                </NavLink>
                            }
                            <NavLink className="nav-link" activeClassName="selected" to="/">
                                Home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}