import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../store/authentication/auth-context';

interface IAuthRoute {
  key: number,
  path: string,
  exact: boolean,
}

export const AuthRoute: React.FC<IAuthRoute> = ({ key, path, exact, children }) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route key={key} path={path} exact={exact} render={({ location }) =>
      authState.isAuthenticated
        ? (children)
        : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
    }
    />
  )
}