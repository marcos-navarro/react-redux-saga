export const types = {
    ADD_REQUEST:'ADD_REQUEST',
    ADD_SUCCESS:'ADD_SUCCESS',
    ADD_FAILURE:'ADD_FAILURE',
    REMOVE:'REMOVE',
}

export interface User{
    id:number;
    name:string;
    avatar_url:string;
    location:string;
}

export interface UserReducerTypes{
    users:User[],
    loading:boolean,
}