import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

//Add todo actions
export const addTodoAction =  (todo) =>({
    type:ADD_TODO,
    payload:todo
})

export const deleteTodoActions = (id ) =>({
    type:DELETE_TODO,
    payload:id
})

export const updateTodoActions = (todo , id) =>({
    type:UPDATE_TODO,
    payload:{todo:todo ,todoId:id}
})