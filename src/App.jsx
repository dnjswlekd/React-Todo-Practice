import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todo, setTodo] = useState([]); // 배열

  // form은 원래 제출하고나면 다른페이지로 이동 그현상을 막기위해 preventDefault 필수 => react는 SPA 때문에 새로고침 없어야함!
  // push 절대 안됨 왜냐 react는 새로 담아줘야하기때문 ex todo === todo가 true이면 변경사항을 파악을 못함
  // todo.push({
  //   title: newTodo,
  //   completed: false,
  //   id: Math.random(),
  // });
  // 꼭 새로 담아줘야함
  const onSubmit = (newTodo) => {
    console.log('onParentSubmit');
    const nextTodo = [
      ...todo,
      {
        title: newTodo,
        completed: false,
        id: Math.random(),
      },
    ];

    setTodo(nextTodo);
    console.log(nextTodo); // 바로 안 바뀜 , 비동기때문도 아님
    // 그래서 어디서 확인하느냐? useEffect 써야함
  };

  useEffect(() => {
    // todo가 바뀌었는지 감지하는 함수
  }, [todo]);

  return (
    <>
      {/* fragment로 꼭 감싸기 <> (빈껍데기) */}
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <h1>할 일을 추가해보세요.</h1>
            <TodoForm onSubmit={onSubmit} />
          </div>
        ) : (
          <>
            {todo.map((t, i) => (
              <TodoItem key={t.id} item={t} index={i} setTodo={setTodo} />
            ))}
            <TodoForm onSubmit={onSubmit} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
