import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

import { AuthContext, SET_IS_AUTHENTICATED_FAIL } from '../../store/authentication';
import { navigationItems } from "./navigation-config";

import logo from '../../assets/logo_campaigns.png';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const { authState, dispatch } = useContext(AuthContext);

  const logoutUser = () => {
    dispatch({ type: SET_IS_AUTHENTICATED_FAIL });
  }

  if (authState.isAuthenticated) {
    return (
      <div className="header__wrapper">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <img className={styles.headerLogo} src={logo} alt="logo" />
              </Link>
              {navigationItems.map((item) => (
                <Link key={item.title} className={item.className} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              ))}
            </Nav>
            <Nav>
              <Link className="nav-link" to="/no-where"> <i className="fas fa-dizzy"></i></Link>
              <LanguageDropdown />
              <Link className="nav-link" to="/login" onClick={() => logoutUser()}>Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  return null;
};

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <NavDropdown title={<LanguageSelector />} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
      <NavDropdown.Item onClick={() => i18n.changeLanguage('jp')}>Japanese</NavDropdown.Item>
    </NavDropdown>
  );
}

const LanguageSelector: React.FC = () => (
  <>
    <i className="fas fa-globe"></i>
  </>
);
