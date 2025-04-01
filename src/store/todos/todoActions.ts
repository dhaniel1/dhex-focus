import { TodoItem, TodoStage } from "./state";

export enum TODOACTIONTYPE {
  CreateTodo,
  UpdateTodo,
  MoveTodo,
  DeleteTodo,
  ReorderTodo,
}

export interface CreateTodo {
  type: TODOACTIONTYPE.CreateTodo;
  payload: TodoItem;
}

export interface ReorderTodo {
  type: TODOACTIONTYPE.ReorderTodo;
  payload: {
    stage: TodoStage;
    reorderedItems: TodoItem[];
  };
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
    toIndex: number;
  };
}

export interface DeleteTodo {
  type: TODOACTIONTYPE.DeleteTodo;
  payload: { index: number; todoStage: TodoStage };
}

export type TodoActions =
  | CreateTodo
  | UpdateTodo
  | MoveTodo
  | ReorderTodo
  | DeleteTodo;
