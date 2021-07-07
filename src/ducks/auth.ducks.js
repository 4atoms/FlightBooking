import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "home";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
  username: "sachin",
};

// ACTIONS

const ASSIGN_TO_Auth_STORE = createAction("ASSIGN_TO_Auth_STORE");
const RESET_Auth_STORE = createAction("RESET_Auth_STORE");

const assignToAuthStore = (type, payload) => ({
  type: ASSIGN_TO_Auth_STORE,
  meta: {
    type,
    payload,
  },
});

const resetAuthStore = () => (dispatch) => {
  dispatch({
    type: RESET_Auth_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const homeReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_Auth_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_Auth_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: homeReducer,
  creators: {
    assignToAuthStore,
    resetAuthStore,
  },
};
