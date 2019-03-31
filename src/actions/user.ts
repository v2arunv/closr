import {IUser} from "../models/users";

export interface IUserAction {
    type: string,
    user?: IUser,
    id?: string,
}

export const getUser = (id: string): IUserAction => {
    return <IUserAction> {
        type: 'GET_USER',
        id,
    }
};