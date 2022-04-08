import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import "../App.css"

export default function Home(){

    const [newTitle, setNewTitle] = useState("")
    const [todos, setTodos] = useState([
       {
               id:uuidv4(),
               title:"lorem 1",
               done: false
             },
             {
               id:uuidv4(),
               title:"lorem 2",
               done: true
             },
    ])

    const handleEdittodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? ({...todo, done: !todo.done}) : todo))}

    

    const handleAddNewTodo = (event) => {
        event.preventDefault()
        const newTodo = {
            id:uuidv4(),
            title:newTitle,
            done:false
            }
            setTodos([newTodo, ...todos])
            setNewTitle("")
        }

    const handleHapusTodo = (id) => { 
        setTodos((olddata) => olddata.filter(item => {return item.id !== id;} 
        ))}
        
         

    const render = todos.map((todo) => (
            <div className='isi' key={todo.id}>
            <input  
                    checked={todo.done} 
                    type="checkbox" 
                    onChange={() => handleEdittodo(todo.id)}/> 
                 <span style={todo.done ? {textDecoration : 'line-through'} : {}} > {todo.title}</span>   
    
            <button 
                onClick={()=> handleHapusTodo(todo.id)}>
                    hapus
            </button>
            </div>      
      ))


  return (
    <div className='Home'>
        <h1>TODOLIST .</h1>
        <input className='text' type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)}/>
        <button onClick={handleAddNewTodo}>
          ADD
        </button>
      {render}
    </div>

)
}