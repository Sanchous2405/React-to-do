import React, { useState } from "react";
import { CreateTodoField } from "./CreateTodoField";
import TodoItem from "./TodoItem/index";

const data = [
  {
    _id: "ffp",
    title: "Finish the essay ",
    isComplited: false,
    date: new Date().toLocaleDateString(),
    
  },
  {
    _id: "f",
    title: "Read the essay ",
    isComplited: false,
    date: new Date().toLocaleDateString(),
  },
  {
    _id: "fp",
    title: "Go to university ",
    isComplited: false,
    date: new Date().toLocaleDateString(),
    
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  const addTodo = (title, date,file) => {
    setTodos([
      {
        _id: new Date(),
        title,
        isComplited: false,
        date: new Date().toLocaleDateString(),
        file: new FormData(),
      },

      ...todos,
    ]);
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10"> ToDo for junior</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField addTodo={addTodo} />
    
    </div>
  );
};

export default Home;
