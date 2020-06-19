import { types, User } from "./types";

export function addUserRequest(name: string) {
  return {
    type: types.ADD_REQUEST,
    payload: { name },
  };
}
export function addUserSuccess(user: User) {
  return {
    type: types.ADD_SUCCESS,
    payload: { user },
  };
}
export function addUserFailure() {
  return {
    type: types.ADD_FAILURE,
  };
}

export function removeUser(id: number) {
  return {
    type: types.REMOVE,
    payload: { id },
  };
}
