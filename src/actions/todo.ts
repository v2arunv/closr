import {ITodo} from "../models/todo";

export interface ITodoAction {
    type: string,
    id?: string,
    completed?: boolean,
    title?: string,
    userId?: string,
}

export const addTodo = (payload: ITodo): ITodoAction  => {
    return Object.assign({}, {type: 'ADD_TODO'}, payload);
};

export const toggleTodo = (id: string): ITodoAction => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
};