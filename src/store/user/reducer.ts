import { Reducer } from "redux";
import { UserReducerTypes, types } from "./types";

const INITIAL_STATE: UserReducerTypes = {
  users: [],
  loading: false,
};

const reducer: Reducer<UserReducerTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_REQUEST:
      return { ...state, loading: true };

    case types.ADD_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        loading: false,
      };

    case types.ADD_FAILURE:
      return { ...state, loading: false };

    case types.REMOVE:
      return {
        ...state,
        users: [...state.users.filter((u) => u.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default reducer;
