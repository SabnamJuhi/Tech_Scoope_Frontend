




const initialState = {
  dashboards: [],
};

export default function dashboardReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case "SET_DASHBOARDS":
      return {
        ...state,
        dashboards: action.payload,
      };

    case "GET_DASHBOARDS_SUCCESS":
      return {
        ...state,
        dashboards: action.payload,
      };

    case "ADD_DASHBOARD":
      return {
        ...state,
        dashboards: [
          ...state.dashboards,
          action.payload,
        ],
      };

    case "DELETE_DASHBOARD":
      return {
        ...state,
        dashboards: state.dashboards.filter(
          dashboard => dashboard.id !== action.payload
        ),
      };

    default:
      return state;
  }
}