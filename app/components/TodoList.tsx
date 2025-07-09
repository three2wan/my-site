import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <motion.section
      className="max-w-xs sm:max-w-lg w-full mx-auto mt-8 sm:mt-12 bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 text-center">Todo List</h2>
      <form onSubmit={addTodo} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
      <ul className="space-y-3">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="accent-blue-600 w-5 h-5"
              />
              {editId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(todo.id);
                      if (e.key === "Escape") setEditId(null);
                    }}
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-600 dark:text-green-400 hover:underline text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="text-gray-500 dark:text-gray-400 hover:underline text-sm ml-1"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`flex-1 text-lg cursor-pointer select-text text-gray-900 dark:text-gray-100 ${
                      todo.completed ? "line-through text-gray-400 dark:text-gray-500" : ""
                    }`}
                    onDoubleClick={() => startEdit(todo.id, todo.text)}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-600 dark:text-red-400 hover:underline text-sm ml-1"
                  >
                    Delete
                  </button>
                </>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {todos.length === 0 && (
        <div className="text-gray-400 dark:text-gray-500 text-center mt-6">No todos yet. Add one!</div>
      )}
    </motion.section>
  );
};

export default TodoList; 