import {IUser} from "../models/users";

export interface IUserAction {
    type: 'GET_USER' | 'RESET_USER_STATE' | 'GET_USER_SUCCESS' | 'GET_USER_ERROR',
    user?: IUser,
    id?: string,
}

export const getUser = (id: string): IUserAction => {
    return <IUserAction> {
        type: 'GET_USER',
        id,
    }
};

export const resetState = (): IUserAction => {
    return <IUserAction> {
        type: 'RESET_USER_STATE'
    }
}