import React from "react";
import Todo from "../models/todo";
import { useState } from "react";


type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}


export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});


export const TodosContextProvider: React.FC = (props) => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
    
        setTodoList((prevTodos) => {
          return prevTodos.concat(newTodo);
        });
        
      };
    
      const removeTodoHandler = (todoId: string) => {
        setTodoList((prevTodos) => {
          return prevTodos.filter(todo => todo.id !== todoId);
        });
      };

      const contextValue: TodosContextObj = { 
          items: todoList,
          addTodo: addTodoHandler,
          removeTodo: removeTodoHandler
        };
    
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};


