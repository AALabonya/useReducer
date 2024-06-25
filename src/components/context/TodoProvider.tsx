import { ReactNode, createContext } from "react";

export const TodoContexts = createContext(null);

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
