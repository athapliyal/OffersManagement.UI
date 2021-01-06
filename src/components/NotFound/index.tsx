import { Link } from 'react-router-dom';

import './not-found.scss';

export const NotFound = () => {
    return (
        <div className="not-found-wrapper">
            <i className="fas fa-dizzy fa-10x not-found-icon"></i>
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-text">Hmm. Looks like we can't find that page!</p>
            <Link className="nav-link back-to-login" to="/">Go back to homepage</Link>
        </div>
    )
}