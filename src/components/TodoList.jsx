import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(...todos);
  };

  const completeTodos = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue)) {
      return;
    }
    setTodos(prev => prev.map(item => (
      item.id === todoId ? newValue : item
    )));
  };

  const submitUpdate = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className='todo-list'>
      <h3>What do you plan for today?</h3>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodos={completeTodos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default TodoList;