import { TodoActions, TodoItem, TodoState } from ".";
import { TODOACTIONTYPE } from "./todoActions";

export const TodoReducer = function (
  state: TodoState,
  action: TodoActions
): TodoState {
  switch (action.type) {
    /* Creates a new todo Item */
    case TODOACTIONTYPE.CreateTodo:
      return [...state, action.payload as TodoItem];

    /* Updates a new todo Item */

    case TODOACTIONTYPE.UpdateTodo:
      const filteredItem = state.filter(function ({ id }) {
        return id !== action.payload.id;
      });
      return [...filteredItem, action.payload as TodoItem];

    /* Deletes a todo Item */
    case TODOACTIONTYPE.DeleteTodo:
      return state.filter(function ({ id }) {
        return id !== action.payload.id;
      });

    default:
      return state;
  }
};
