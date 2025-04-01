import { createContext, useContext } from "react";
import { initialTodoState, TodoActions, TodoState } from "./";

interface ITodoContext {
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
}

export const TodoContext = createContext<ITodoContext>({
  state: initialTodoState,
  dispatch: () => undefined,
});

export const useTodoContext = () => {
  const { state, dispatch } = useContext(TodoContext);

  return { state, dispatch };
};
