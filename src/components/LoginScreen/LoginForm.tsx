import React, { useState, useContext } from "react";
import { Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { LoginFormErrors } from "./LoginFormErrors";

import { AuthContext, SET_IS_AUTHENTICATED_SUCCESS } from "../../store/authentication";

import { loginService } from "../../services/login-service";
import { LoginModel } from "../../models/LoginModel";

interface LoginFormData {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { register, setValue, handleSubmit, errors } = useForm<LoginFormData>();

  const onSubmit = handleSubmit(({ username, password }) => {
    const credentials: LoginModel = {
      username,
      password,
    };

    loginService
      .login(credentials)
      .then(() => {
        authContext.dispatch({ type: SET_IS_AUTHENTICATED_SUCCESS, value: { isAuthenticated: true } });

        // go to home page if authenticated
        history.push("/");
      })
      .catch((err) => {
        setLoginError(true);
      });
  });

  return (
    <>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            id="username"
            onChange={(e) => setValue("username", e.target.value)}
            ref={register({
              required: "Please enter username",
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
            id="password"
            type="password"
            onChange={(e) => setValue("password", e.target.value)}
            ref={register({
              required: "Please enter password",
            })}
          />
        </div>

        <a className="forgotten-password-link" href="/login">
          Forgotten Password?
        </a>
        <Button variant="primary" type="submit" className="login-button">
          Log in
        </Button>
      </form>
      {errors && <LoginFormErrors errors={errors} />}
      {loginError && <LoginFailedError />}
    </>
  );
};

const LoginFailedError: React.FC = () => {
  return (
    <Alert variant="danger">
      Please check your username or password
    </Alert>
  );
};
