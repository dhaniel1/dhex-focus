export enum TODOSTAGE {
  TODO = "to do",
  INPROGRESS = "in progress",
  COMPLETED = "completed",
}

export interface TodoItem {
  id: number;
  todoStage: TodoStage;
  description: string;
}

export type TodoStage = `${TODOSTAGE}`;

export const initialTodoState: TodoState = [
  {
    id: 0,
    stage: "to do",
    children: [
      {
        id: 1,
        description: "✅ Finish the React drag-and-drop feature",
        todoStage: "to do",
      },
    ],
  },
  {
    id: 1,
    stage: "in progress",
    children: [
      {
        id: 2,
        description: "🎙️ Record the next podcast episode",
        todoStage: "in progress",
      },
    ],
  },
  {
    id: 2,
    stage: "completed",
    children: [
      {
        id: 3,
        description: "🔍 Conduct user testing for the new app feature",
        todoStage: "completed",
      },
    ],
  },
];

// type TodoState2 = ReturnType<() => typeof initialTodoState>;
export type TodoStateItem = {
  id: number;
  stage: TodoStage;
  children: TodoItem[];
};

export type TodoState = TodoStateItem[];
