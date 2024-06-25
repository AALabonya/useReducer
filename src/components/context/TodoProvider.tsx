import { createContext } from "react";

export const TodoContexts = createContext(undefined);

export default function TodoProvider({ children }) {
  const info = {
    todoTittle: `this is todo tittle`,
  };
  return <TodoContexts.Provider value={info}>{children}</TodoContexts.Provider>;
}
