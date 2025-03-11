import { useState } from 'react';

export default function TodoForm({ onSubmit: onParentSubmit }) {
  const [newTodo, setNewTodo] = useState(''); //문자열

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') return; // 공백 입력 방지
    console.log('onChildSubmit');
    onParentSubmit(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={newTodo} onChange={onChangeNewTodo} />
      <button>추가</button>
    </form>
  );
}
