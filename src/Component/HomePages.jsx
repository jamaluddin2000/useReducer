import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useReducer } from 'react';
import { createStore } from 'redux';
import { v4 as uuidv4 } from "uuid";

const initialValue = {
    todos : [
        {
            id:uuidv4(),
            title:"lorem 1",
            done: false
          },
          {
            id:uuidv4(),
            title:"lorem 2",
            done: true
          }
]
}

const ACTIONS = {
    EDIT_TODO : 'edittodo',
    ADD_TODO : 'addTodo',
    DELET_TODO : 'hapusTodo'
}


function reduser(state = initialValue , action){
    switch(action.type){
        case ACTIONS.EDIT_TODO:
            return{
                ...state.todos,
                todos: state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                    ...todo,
                    completed: !todo.completed
                    };
                }
                return todo;
                })
            }
        case ACTIONS.ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.todoBaru]
            }

        case ACTIONS.DELET_TODO:
            return{
                ...state.todos,
                todos: state.todos.filter(item => {return item.id !== action.payload.id; })

            }

        default:
            return state
        }
    
}

export const editTodo = id => {
    return {
      type: ACTIONS.EDIT_TODO,
      payload: {
        id
      }
    };
  };

  export const addTodo = (todo) => {
    return {
      type: ACTIONS.EDIT_TODO,
      todoBaru : todo
      }
    };

  export const deletTodo = (id) => {
    return {
      type: ACTIONS.EDIT_TODO,
      payload: {
        id
      }
    };
  };


  
  
  export default function HomePages(){
      const [state, dispatch] = useReducer(reduser, initialValue)
      const store = createStore(reduser);
    //   store.subscribe(() => dispatch({type:ACTIONS.EDIT_TODO} ))
    dispatch(deletTodo(id))
    dispatch(addTodo(todo))
    dispatch(editTodo(id))


    return(
        <>
        {state.todos.title}
        <div>halooo</div>
        </>


    )
}
