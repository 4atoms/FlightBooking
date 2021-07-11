import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RefContext from "Utilities/refContext";

import {
  Wrapper,
  InnerWrapper,
  LoginContent,
  InputTypes,
  ButtonBlock,
} from "./signinForm.style";

const SigninForm = () => {
  const context = useContext(RefContext);

  const {
    store: { username, email, password },
  } = context;

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <LoginContent>
            <h3>Fly With Us</h3>
            <label htmlFor="username">
              Username
              <InputTypes>
                <input
                  type="text"
                  name="username"
                  value={username}
                  id="username"
                />
              </InputTypes>
            </label>
            <label htmlFor="email">
              Email
              <InputTypes>
                <input type="text" name="email" value={email} id="email" />
              </InputTypes>
            </label>
            <label htmlFor="password">
              Password
              <InputTypes>
                <input type="password" name="password" value={password} />
              </InputTypes>
            </label>

            <ButtonBlock>
              <Link to="/home">
                <button type="submit">Sign In </button>
              </Link>
            </ButtonBlock>
            <h4>
              <Link to="/login">Already Have Account Login</Link>
            </h4>
          </LoginContent>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default SigninForm;
