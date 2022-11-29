import React from 'react';
import {useState} from 'react';


function TodoForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" name='text' className='todo-input' placeholder='Add Tasks...' value={input} onChange={handleChange} />
      <button className='todo-button'>Submit</button>
    </form>
  )
}

export default TodoForm