import { useEffect, useState } from "react";
import Input from "./compoents/Input";
import Todo from "./compoents/Todo";
import { TodoProvider } from "./context/Todo";

export default function App() {

  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const updateTodo = (index, updatedTodo) => {
    let newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const removeAll = () => {
    setTodos([]);
    localStorage.setItem("todos", JSON.stringify([]));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, removeAll }}>
      <div className="flex justify-center my-10 gap-3">
        <button className="p-2 bg-red-500 text-white rounded-lg" onClick={removeAll}>Clear All</button>
        <div className="flex flex-col gap-4">
          <Input />
          <Todo />
        </div>
      </div>
    </TodoProvider>
  )
}