import { Link } from 'react-router-dom'
export default function NoLoggedHome() {
    return (
        <div className="container-fluid p-4 mt-4 bg-light rounded border border-secondary">
            <h2 className="m-5">
                You need to be <Link to="/login">logged</Link> to manage your wallet
            </h2>
            <hr />
            <h2 className="m-5">
                If you haven't an account <Link to="/register">get your acount here</Link>
            </h2>
        </div>
    )
}