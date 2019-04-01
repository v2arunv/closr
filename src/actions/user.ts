import {IUser} from "../models/users";

export interface IUserAction {
    type: string,
    user?: IUser,
    id?: string,
}

export const getUser = (id: string): IUserAction => {
    console.log('action called', id);
    return <IUserAction> {
        type: 'GET_USER',
        id,
    }
};