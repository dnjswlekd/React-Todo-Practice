import { useState } from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      {/* fragment로 꼭 감싸기 <> (빈껍데기) */}
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <h1>할 일을 추가해보세요.</h1>
            <input type="text" />
          </div>
        ) : (
          <>
            {todo.map((t, id) => (
              <div key={id}>{t.title}</div>
            ))}
            <input type="text" />
          </>
        )}
      </div>
    </>
  );
}

export default App;
