import { createContext, useContext } from "react";
import {
  initialTodoState,
  TodoActions,
  TodoItem,
  TODOSTAGE,
  type TodoStage,
  TodoState,
} from "./";

interface ITodoContext {
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
}

export const TodoContext = createContext<ITodoContext>({
  state: initialTodoState,
  dispatch: () => undefined,
});

function filterByProperty<T, K extends keyof T>(
  iterable: Array<T>,
  propertyName: K,
  filterStage: TodoStage
) {
  return iterable.filter((item) => item[propertyName] === filterStage);
}

export const useTodoContext = () => {
  const { state, dispatch } = useContext(TodoContext);

  const todo = filterByProperty<TodoItem, "todoStage">(
    state,
    "todoStage",
    TODOSTAGE.TODO
  );
  const inProgress = filterByProperty<TodoItem, "todoStage">(
    state,
    "todoStage",
    TODOSTAGE.INPROGRESS
  );
  const completed = filterByProperty<TodoItem, "todoStage">(
    state,
    "todoStage",
    TODOSTAGE.COMPLETED
  );
  return { states: { todo, inProgress, completed }, dispatch };
};
