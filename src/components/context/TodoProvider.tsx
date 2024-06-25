import { ReactNode, createContext, useReducer } from "react";

export const TodoContexts = createContext(null);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const info = {
    todoTittle: `this is todo tittle` as string,
  };
  return <TodoContexts.Provider value={info}>{children}</TodoContexts.Provider>;
};

export default TodoProvider;
