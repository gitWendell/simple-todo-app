import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="project-title">TODO APP</h1>
      <input
        type="text"
        className="inputbox"
        value={newTodo}
        onChange={handleNewTodoChange}
        placeholder="Enter a new task"
      />
      <button className="button float-right" onClick={handleAddTodo}>Add</button>
      <div className="todo-items-holder">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            <span className="todo-item-name"
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <span className="delete-action float-right">
              <FaTrash onClick={() => handleDeleteTodo(index)}/>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;