
const initialState = {
  widgets: [],
};

export default function widgetReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case "SET_WIDGETS":
      return {
        ...state,
        widgets: action.payload || [],
      };

    case "ADD_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.payload,
        ],
      };

    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(
          (widget) =>
            widget.id !== action.payload
        ),
      };

    case "PIN_WIDGET":
  return {
    ...state,
    widgets: state.widgets.map((w)=>
      w.id===action.payload.id
        ? action.payload
        : w
    )
  };

    default:
      return state;
  }
}