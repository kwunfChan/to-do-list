import {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({ todos, completeTodos, removeTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    text: ''
  })



  return todos.map((todo, index) => (
    <div className={ todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodos(todo.id)} >{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(todo.id)} />
        <TiEdit classNmae='edit-icon' onClick={() => editTodo(todo.id)}  />
      </div> 
    </div>
  ))
}

export default Todo