const initialState = {
  analytics: [],
};

export default function analyticsReducer(
  state = initialState,
  action
) {

  switch (action.type) {

    case "SET_ANALYTICS":
      return {
        ...state,
        analytics: action.payload,
      };

    default:
      return state;
  }
}