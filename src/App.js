import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  //Set the default to-do list
  const setDefaultTodos = [
    {
    id: Math.floor(Math.random() * 10000),
    text: 'Code review'
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: 'Drop kid at school'
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: 'Daily scrum'
  }
]
localStorage.setItem('myTodoListLS', JSON.stringify(setDefaultTodos));
  return (
    <div className="todo-app">
     <TodoList />
    </div>
  );
}

export default App;
