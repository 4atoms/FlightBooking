import React from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import SigninForm from "./signinForm";

//import LoginForm from "./loginForm";

const Signin = (props) => {
  const propShape = formStoreData(props, ["signin"]);

  //   useEffect(() => {
  //     return () => {
  //       propShape.actions.resetHomeStore();
  //     };
  //   }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <SigninForm />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Signin.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Signin;
