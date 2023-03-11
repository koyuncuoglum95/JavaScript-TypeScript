import React, { useContext } from 'react'
import { TodosContext } from '../../store/todos-context';

import './Todos.css';
import { TodosItem } from './TodosItem/TodosItem';


// React.FC: FunctionComponent
// items: string[] is a items props with type string array

const Todos: React.FC = () => {

  const todoCtx = useContext(TodosContext);

  return (
    <ul className='todos'>
      {todoCtx.items.map((item) => (
        <TodosItem 
        key={item.id} 
        text={item.text} 
        removeTodo={todoCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  )
}

export default Todos