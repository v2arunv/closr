import {IUser} from "../models/users";
import {IUserAction} from "../actions/user";

export interface IUserState {
    loading: boolean,
    error: boolean,
    user?: IUser | null,
}

const initialState: IUserState = {
    loading: true,
    error: false,
    user: null,
};

const profile = (state:IUserState = initialState, action: IUserAction): IUserState => {
    switch (action.type) {
        case 'GET_USER':
            return {
                loading: true,
                error: false,
                user: null,
            };
        case 'GET_USER_SUCCESS':
            return {
                loading: false,
                error: false,
                user: action.user
            };
        case 'GET_USER_ERROR':
            return {
                loading: false,
                error: true,
                user: null,
            }
        default:
            return state
    }
};

export default profile;