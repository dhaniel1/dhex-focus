import { TodoItem } from "./state";

export enum TODOACTIONTYPE {
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
}

export interface CreateTodo {
  type: TODOACTIONTYPE.CreateTodo;
  payload: TodoItem;
}

export interface UpdateTodo {
  type: TODOACTIONTYPE.UpdateTodo;
  payload: TodoItem;
}

export interface DeleteTodo {
  type: TODOACTIONTYPE.DeleteTodo;
  payload: { id: number };
}

export type TodoActions = CreateTodo | UpdateTodo | DeleteTodo;
