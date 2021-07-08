import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "home";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
  username: "sachin",
};

// ACTIONS

const ASSIGN_TO_FLIGHTLIST_STORE = createAction("ASSIGN_TO_FLIGHTLIST_STORE");
const RESET_FLIGHTLIST_STORE = createAction("RESET_FLIGHTLIST_STORE");

const assignToFlightList = (type, payload) => ({
  type: ASSIGN_TO_FLIGHTLIST_STORE,
  meta: {
    type,
    payload,
  },
});

const resetFlightList = () => (dispatch) => {
  dispatch({
    type: RESET_FLIGHTLIST_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const flightlistReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_FLIGHTLIST_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_FLIGHTLIST_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: flightlistReducer,
  creators: {
    assignToFlightList,
    resetFlightList,
  },
};
