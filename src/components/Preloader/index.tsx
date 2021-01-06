import Spinner from "react-bootstrap/Spinner";

import './spinner.scss';

export const Preloader: React.FC = () => (
    <div className="preloader__wrapper">
        <div className="spinner__wrapper"><Spinner animation="grow" variant="primary" /></div>
        <div className="spinner__wrapper"><Spinner animation="grow" variant="primary" /></div>
        <div className="spinner__wrapper"><Spinner animation="grow" variant="primary" /></div>
    </div>
)