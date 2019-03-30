import {ITodo} from "../models/todo";
import {ITodoAction} from "../actions/todo";

const initialState: Array<ITodo> = [{
    id: '1',
    userId: 'varun',
    title: 'get home',
    completed: false,
},{
    id: '2',
    userId: 'varun',
    title: 'get home now',
    completed: false,
}];

const todo = (state:Array<ITodo> = initialState, action: ITodoAction): Array<ITodo> => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id || '',
                    completed: false,
                    title: action.title || '',
                    userId: action.userId || '',
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default todo