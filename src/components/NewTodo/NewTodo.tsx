import React, { useRef, useContext } from 'react'
import './NewTodo.css';
import { TodosContext } from '../../store/todos-context';

const NewTodo: React.FC = () => {

    const todoTextRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(TodosContext);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        // ? : this value will be possibly null
        // ! : this value won't be a null;
        const enteredText = todoTextRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }

        todoCtx.addTodo(enteredText);
    }

  return (
      <form onSubmit={submitHandler} className='form' >
          <label htmlFor='text' className='form label'>Todo Text</label>
          <input type='text' id='text' ref={todoTextRef} className='form input'/>
          <button className='form button'>Add Todo</button>
      </form>
  )
}

export default NewTodo