import {IUser} from "../models/users";

export interface IUserAction {
    type: 'GET_USER' | 'RESET_USER_STATE',
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