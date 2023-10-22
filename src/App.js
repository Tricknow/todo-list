import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // react way --> 리액트가 권장하는 방식
  const [todos, setTodos] = useState(["할일 1","할일 2"]);
  //React의 역할 -> State가 변할 때마다 화면을 다시 그린다.
  //어레이에 ["할일 1","할일 2"] 식으로 저장될 것

  
  return (
    // JSX(JS -> HTML)
    <div className="App">
      <h1>TODO List</h1>
      <div>
        <input />
        <button>ADD</button>
      </div>
      {/* DRY Don't Repeat Yourself */}
      {todos.map((todo, index) => (
      <div key={index}>
        <input type="checkbox" />
        <span>{todo}</span>
        <button>DEL</button>
      </div>
      ))}
    </div>
  );
}

export default App;
