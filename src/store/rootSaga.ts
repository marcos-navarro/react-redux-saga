import { all } from "redux-saga/effects";

import userSagas from "./user/sagas";

export default function* root() {
  return yield all([userSagas]);
}
