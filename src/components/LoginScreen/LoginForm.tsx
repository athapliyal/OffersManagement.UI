import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { LoginFormErrors } from "./LoginFormErrors";

import { AuthContext, SET_IS_AUTHENTICATED_SUCCESS } from "../../store/authentication";

import { loginService } from "../../services/login-service";

type LoginFormData = {
  username: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { register, setValue, handleSubmit, errors } = useForm<LoginFormData>();

  const onSubmit = handleSubmit(({ username, password }) => {    
    loginService(username, password)
      .then(() => {
        authContext.dispatch({ type: SET_IS_AUTHENTICATED_SUCCESS, value: { isAuthenticated: true } });

        // go to home page if authenticated
        history.push("/");
      })
      // can show toaster here with an error message
      .catch(() => {
        console.log("some error");
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
      <LoginFormErrors errors={errors} />
    </>
  );
};
