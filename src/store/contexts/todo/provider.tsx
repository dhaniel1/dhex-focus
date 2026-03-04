"use client";

import { FC, ReactNode, useReducer } from "react";
import { TodoContext } from "./context";
import { TodoReducer } from "../../reducers/todos/reducer";
import { initialTodoState } from "../../reducers/todos/state";
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
