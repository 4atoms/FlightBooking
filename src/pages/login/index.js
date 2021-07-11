import React from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";

import LoginForm from "./loginForm";

const Login = (props) => {
  const propShape = formStoreData(props, ["login"]);

  //   useEffect(() => {
  //     return () => {
  //       propShape.actions.resetHomeStore();
  //     };
  //   }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <LoginForm />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Login.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Login;
