import { call, put, all, takeLatest, select } from "redux-saga/effects";
import api from "../../services/api";

import { addUserSuccess, addUserFailure } from "./actions";
import { types, User, UserReducerTypes } from "./types";
import { ApplicationStates } from "../rootReducer";

interface Response {
  type: string;
  payload: {
    name: string;
  };
}

function* getUser(action: Response) {
  try {
    const result = yield call(api.get, `users/${action.payload.name}`);

    const serializedUser: User = {
      id: result.data.id,
      avatar_url: result.data.avatar_url,
      location: result.data.location,
      name: result.data.name,
    };

    const usersState: UserReducerTypes = yield select(
      (state: ApplicationStates) => state.user
    );

    if (!usersState.users.find((user) => user.id === serializedUser.id))
      yield put(addUserSuccess(serializedUser));
    else 
      yield put(addUserFailure());

  } catch (error) {
    yield put(addUserFailure());
  }
}

export default all([takeLatest(types.ADD_REQUEST, getUser)]);
