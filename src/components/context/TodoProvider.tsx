import { ReactNode, createContext } from "react";

export const TodoContexts = createContext(null);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {};

const initialState: TTodo[] = [];

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};
type TodoProviderProps = {
  children: ReactNode;
};
const TodoProvider = ({ children }: TodoProviderProps) => {
  const info = {
    todoTittle: `this is todo tittle` as string,
  };
  return <TodoContexts.Provider value={info}>{children}</TodoContexts.Provider>;
};

export default TodoProvider;
