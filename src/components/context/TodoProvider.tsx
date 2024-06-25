import { createContext } from "react";

export const TodoContexts = createContext(undefined);

export default function TodoProvider() {
  const info = {};
  return (
    <TodoContexts.Provider value={info}>TodoProvider</TodoContexts.Provider>
  );
}
