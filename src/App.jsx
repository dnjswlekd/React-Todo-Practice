import { useState } from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: '아침 챙겨먹기', completed: true },
    { id: 2, title: '점심 챙겨먹기', completed: false },
    { id: 3, title: '저녁 챙겨먹기', completed: false },
  ]);

  return (
    <>
      <div className="App">
        {todo.map((t, id) => (
          <div key={id}>{t.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
