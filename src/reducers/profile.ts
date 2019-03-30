import {IUser} from "../models/users";
import {IUserAction} from "../actions/user";

interface IUserState {
    loading: boolean,
    error: boolean,
    user?: IUser | null,
}

const initialState: IUserState = {
    loading: false,
    error: false,
    user: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
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
        default:
            return state
    }
};

export default profile;