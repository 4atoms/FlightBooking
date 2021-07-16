import React from "react";
import { shape } from "prop-types";
import Modal_final from "./Modal_final";


import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";

const Flightdetails = (props) => {
  const propShape = formStoreData(props, ["flightdetails"]);

//   useEffect(() => {
//     return () => {
//       propShape.actions.resetHomeStore();
//     };
//   }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Modal_final/>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Flightdetails.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Flightdetails;
