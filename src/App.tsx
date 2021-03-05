import { ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoCard from './TodoCard';
import { Todo } from './Types';
import addItem from './add_item.png';

const initTodos: Todo[] = [
  {
    IsDone: true,
    Title: 'Ein Detektivbüro aufmachen',
    Text: 'Schmidtchen anrufen',
  },
  {
    IsDone: false,
    Title: 'Ein Kompott schmieden',
    Text: 'Tränen aus dem Auge drücken',
  },
];

function App(): ReactElement {
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const handleAddTodoClick = () => {
    console.log('todos', todos);
    setTodos(todos.concat({ IsDone: true, Text: 'Number', Title: 'Text' }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo flex" alt="logo" />
      </header>

      <div>
        <div className="flex flex-col space-y-2 p-2 bg-red-400">
          {todos.map((t) => (
            <TodoCard todo={t} />
          ))}
        </div>
      </div>
      <button
        onClick={() => handleAddTodoClick()}
        type="button"
        className="m-2 w-10 rounded-l bg-blue-400">
        <img src={addItem} alt="add_item" />
      </button>
    </div>
  );
}

export default App;
