import {combineReducers} from 'redux';
import { UserReducerTypes } from "./user/types";

import user from './user/reducer';


export interface ApplicationStates{
    user:UserReducerTypes
}

export default combineReducers({
    user
})