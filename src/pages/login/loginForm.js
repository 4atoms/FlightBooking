import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RefContext from "Utilities/refContext";

import {
  Wrapper,
  InnerWrapper,
  LoginContent,
  InputTypes,
  ButtonBlock,
  ForgotPassword,
} from "./loginForm.style";

const LoginForm = () => {
  const context = useContext(RefContext);

  const {
    store: { username, password },
  } = context;

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <LoginContent>
            <h3>Fly With Us</h3>
            <label className="labelClass" htmlFor="email">
              Email
            </label>
            <InputTypes>
              <input type="text" name="email" value={username} id="email" />
            </InputTypes>
            <label className="labelClass" htmlFor="password">
              Password
            </label>
            <InputTypes>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
              />
            </InputTypes>

            <ButtonBlock>
              <Link to="/home">
                <button type="submit">Login </button>
              </Link>
            </ButtonBlock>

            <ForgotPassword>
              <h4>Forgot Password?</h4>
            </ForgotPassword>
            <h4>
              <Link to="/signin">New? Sign In</Link>
            </h4>
          </LoginContent>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default LoginForm;
