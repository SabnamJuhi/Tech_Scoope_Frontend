
const initialState = {
  workspaces: [],
  currentWorkspace: null,
  role: null,
};

export default function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WORKSPACES":
      return {
        ...state,
        workspaces: Array.isArray(action.payload) ? action.payload : [],
      };

    case "ADD_WORKSPACE":
      return {
        ...state,
        workspaces: [...state.workspaces, action.payload],
      };

    case "SET_CURRENT_WORKSPACE":
      return {
        ...state,
        currentWorkspace: action.payload.workspace,
        role: action.payload.role,
      };

    default:
      return state;
  }
}