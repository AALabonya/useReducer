import "./App.css";
import TodoProvider from "./components/context/TodoProvider";
import TodoForm from "./components/todo/TodoForm";

function App() {
  return (
    <div className="border-2 border-dashed m-10">
      <TodoProvider />
      <TodoForm />
    </div>
  );
}

export default App;
