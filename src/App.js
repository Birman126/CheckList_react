//Сделано по курсу React JS https://www.youtube.com/watch?v=xJZa2_aldDs&t=1772s

import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Изучить HTML" },
    { id: 2, completed: true, title: "Изучить CSS" },
    { id: 3, completed: true, title: "Изучить JavaScript" },
    { id: 4, completed: false, title: "Изучить React" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todos.completed = !todos.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
      setTodos(
        todos.concat([
          {
            title,
            id: Date.now(),
            completed: false,
          },
        ])
      );
    }
  
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wraper">
        <h1>Список дел</h1>
        <AddTodo onCreate={addTodo}></AddTodo>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : (
          <p>Все выполнено</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
