export default function TodoItem({ item, index, setTodo }) {
  const onChange = (e) => {
    setTodo((prevTodo) => {
      const nextTodo = [...prevTodo];
      nextTodo[index] = { ...nextTodo[index] };
      nextTodo[index].completed = e.target.check;

      prevTodo[index] === nextTodo[index];
      // false가 나오도록 만들어줘야함

      return nextTodo;
    });
  };

  return (
    <div>
      <input type="checkbox" checked={item.completed} onChange={onChange} />{' '}
      {item.title}
    </div>
  );
}
