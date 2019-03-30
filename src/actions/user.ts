import {IUser} from "../models/users";

export interface IUserAction {
    type: string,
    user: IUser,
}

export const setUser = (user: IUser): IUserAction => {
    return <IUserAction> {
        type: 'SET_USER',
        user: user,
    }
};