import { useState } from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = useState([
    { title: '아침 챙겨먹기', completed: true },
    { title: '점심 챙겨먹기', completed: false },
    { title: '저녁 챙겨먹기', completed: false },
  ]);

  return (
    <>
      <div className="App">
        {todo.map((t, index) => (
          <div key={index}>{t.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
