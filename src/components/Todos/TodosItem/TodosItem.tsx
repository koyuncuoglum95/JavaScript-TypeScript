import React from 'react';
import './TodosItem.css';

export const TodosItem: React.FC <{text: string; removeTodo: () => void}> = (props) => {
  return (
    <li className='item' onClick={props.removeTodo}>{props.text}</li>
  )
}
