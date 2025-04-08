"use client";
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const trimmed = input.trim(); // trim the input
    if (trimmed === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const deleteTodo = (todoId: number) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-100">
      <h1 className="text-3xl font-bold my-4">To-Do List</h1>

      <div className="flex w-full max-w-md mb-4">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-400 rounded-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 bg-white border rounded mb-2"
          >
            {todo.text}
            <span>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-1"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
