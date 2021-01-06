import { LoginForm } from './LoginForm';

import campaignsBg from '../../assets/bg-campaigns.jpg';
import logo from '../../assets/campaigns-logo.png';

import './login-screen.scss';

export const LoginScreen: React.FC = () => {
    return (
        <div className="login-screen">
            <div className="container-fluid">
                <div className="row">
                    <div className="login-form__wrapper col-md-12 col-lg-6">
                        <div className="login-form__content">
                            <img className="campaigns-logo" src={logo} alt="Logo" />
                            <h1>Welcome, please log in to your account</h1>
                            <LoginForm />
                            <div className="copyright">
                                <p>Having trouble logging in? Please contact your system administrator</p>
                                <p>&#169; Copyrights Reserved Plexure 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="campaign-background col-md-6 d-none d-lg-block">
                        <img className="campaigns-bg" src={campaignsBg} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};