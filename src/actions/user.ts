import {IUser} from "../models/users";

export interface IUserAction {
    type: string,
    user?: IUser,
    id?: string,
}

export const getUser = (): IUserAction => {
    return <IUserAction> {
        type: 'GET_USER',
        id: '10',
    }
};