import { useState } from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = useState();

  return (
    <>
      <div className="App">
        <h1>todolist</h1>
      </div>
    </>
  );
}

export default App;
