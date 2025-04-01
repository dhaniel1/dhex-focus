import { TodoActions, TodoState } from ".";
import { TODOACTIONTYPE } from "./todoActions";

export const TodoReducer = function (
  state: TodoState,
  action: TodoActions
): TodoState {
  switch (action.type) {
    /* Creates a new todo Item */
    case TODOACTIONTYPE.CreateTodo:
      const stateWithNewTodo = state.map((stateItem) => {
        if (stateItem.stage === action.payload.todoStage)
          return {
            ...stateItem,
            children: [action.payload, ...stateItem.children],
          };
        return stateItem;
      });

      return stateWithNewTodo;

    /* Updates a new todo Item */
    case TODOACTIONTYPE.UpdateTodo:
      const {
        updatedStageChildren,
        newStage: newTodoState,
        updatedTodoItem,
        currentStage,
      } = action.payload;

      const stateWithUpdatedTodo = state.map((stateItem) => {
        if (stateItem.stage === currentStage) {
          return { ...stateItem, children: updatedStageChildren };
        }
        if (stateItem.stage === newTodoState) {
          return {
            ...stateItem,
            children: [updatedTodoItem, ...stateItem.children],
          };
        }

        return stateItem;
      });

      return stateWithUpdatedTodo;

    /* Deletes a todo Item */
    case TODOACTIONTYPE.DeleteTodo:
      const { todoStage, index: todoIndex } = action.payload;
      const stateWithDeletedTodo = state.map((stateItem) => {
        if (stateItem.stage === todoStage) {
          return {
            ...stateItem,
            children: [...stateItem.children].splice(todoIndex, 1),
          };
        }
        return stateItem;
      });

      return stateWithDeletedTodo;

    case TODOACTIONTYPE.MoveTodo:
      const { newStage, newTodoIndex, oldTodoIndex, movedTodo } =
        action.payload;

      const stateWithMovedTodo = state.map((stateItem) => {
        // Remove the todo item from the old position
        if (stateItem.stage === movedTodo.todoStage) {
          const updatedChildren = [...stateItem.children];
          updatedChildren.splice(oldTodoIndex, 1);
          return {
            ...stateItem,
            children: updatedChildren,
          };
        }

        // Insert the todo item into the new position
        if (stateItem.stage === newStage) {
          const updatedMovedTodo = { ...movedTodo, todoStage: newStage };
          const updatedChildren = [...stateItem.children];
          updatedChildren.splice(newTodoIndex, 0, updatedMovedTodo);

          return {
            ...stateItem,
            children: updatedChildren,
          };
        }

        return stateItem;
      });

      return stateWithMovedTodo;

    default:
      return state;
  }
};
