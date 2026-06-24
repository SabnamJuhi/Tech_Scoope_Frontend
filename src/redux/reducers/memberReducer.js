const initialState = {
  members: [],
};

export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MEMBERS":
      return {
        ...state,
        members: action.payload,
      };

    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
      };

    case "REMOVE_MEMBER":
      return {
        ...state,
        members: state.members.filter(
          (member) => member.UserId !== action.payload,
        ),
      };

    default:
      return state;
  }
}
