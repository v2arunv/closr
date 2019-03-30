import {IUser} from "../models/users";

export interface IUserAction {
    type: string,
    user: IUser,
}

export const getUser = (): IUserAction => {
    return <IUserAction> {
        type: 'GET_USER',
    }
};