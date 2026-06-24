const initialState = {
  filters: [],
};

export default function filterReducer(
  state = initialState,
  action
) {

  switch (action.type) {

    case "SET_FILTER":
      return {
        ...state,
        filters: action.payload,
      };

    default:
      return state;
  }
}