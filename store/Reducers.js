import ACTIONS from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return { ...state, notify: action.payload };
    case ACTIONS.AUTH:
      return { ...state, currentUser: action.payload };
    case ACTIONS.CATAGORY:
      return { ...state, catagory: action.payload };
    default:
      return state;
  }
};
export default reducers;
