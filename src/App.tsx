import "./App.css";
import TodoProvider from "./components/context/TodoProvider";
import TodoForm from "./components/todo/TodoForm";

function App() {
  return (
    <TodoProvider>
      <div className="border-2 border-dashed m-10">
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
