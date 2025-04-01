import { TodoItem, TodoStage } from "./state";

export enum TODOACTIONTYPE {
  CreateTodo,
  UpdateTodo,
  MoveTodo,
  DeleteTodo,
}

export interface CreateTodo {
  type: TODOACTIONTYPE.CreateTodo;
  payload: TodoItem;
}

export interface MoveTodo {
  type: TODOACTIONTYPE.MoveTodo;
  payload: {
    newStage: TodoStage;
    newTodoIndex: number;
    oldTodoIndex: number;
    movedTodo: TodoItem;
  };
}

export interface UpdateTodo {
  type: TODOACTIONTYPE.UpdateTodo;
  payload: {
    newStage: TodoStage;
    currentStage: TodoStage;
    updatedTodoItem: TodoItem;
    updatedStageChildren: TodoItem[];
  };
}

export interface DeleteTodo {
  type: TODOACTIONTYPE.DeleteTodo;
  payload: { index: number; todoStage: TodoStage };
}

export type TodoActions = CreateTodo | UpdateTodo | MoveTodo | DeleteTodo;
