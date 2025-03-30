import { FC, ReactNode, useReducer } from "react";
import { TodoContext } from "./todosContexts";
import { TodoReducer } from "./todoReducers";
import { initialTodoState } from "./state";
interface Iprop {
  children: ReactNode;
}

export const TodoProvider: FC<Iprop> = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialTodoState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
