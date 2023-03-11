import './App.css';
import { Todos, NewTodo } from './components/index';
import { TodosContextProvider } from './store/todos-context';

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Todos />
        <NewTodo />
      </TodosContextProvider>
    </div>
  );
}

export default App;
