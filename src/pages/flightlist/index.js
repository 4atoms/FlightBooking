import React from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";

const FlightList = (props) => {
  const propShape = formStoreData(props, ["flightlist"]);

//   useEffect(() => {
//     return () => {
//       propShape.actions.resetHomeStore();
//     };
//   }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <div>List of Flight</div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

FlightList.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default FlightList;
