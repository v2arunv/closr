import {ITodo} from "../models/todo";
import {ITodoAction} from "../actions/todo";

const initialState: Array<ITodo> = [];

const todos = (state:Array<ITodo> = initialState, action: ITodoAction): Array<ITodo> => {
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

export default todos