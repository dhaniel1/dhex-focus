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

export const initialTodoState: Array<TodoItem> = [
  {
    id: 1,
    description: "✅ Finish the React drag-and-drop feature",
    todoStage: "to do",
  },
  { id: 2, description: "📧 Respond to client emails", todoStage: "to do" },
  {
    id: 3,
    description: "🎙️ Record the next podcast episode",
    todoStage: "in progress",
  },
  {
    id: 4,
    description: "🧠 Brainstorm marketing ideas for Pllugg",
    todoStage: "to do",
  },
  {
    id: 5,
    description: "💻 Fix bugs in the CRM application",
    todoStage: "completed",
  },
  {
    id: 6,
    description: "📅 Schedule team meeting for next sprint",
    todoStage: "completed",
  },
  {
    id: 7,
    description: "🔧 Optimize performance in the power dialler",
    todoStage: "to do",
  },
  {
    id: 8,
    description: "💬 Review social media content for the week",
    todoStage: "in progress",
  },
  {
    id: 9,
    description: "📝 Write blog post on SEO best practices for Pllugg",
    todoStage: "in progress",
  },
  {
    id: 10,
    description: "📊 Analyze user engagement metrics on the website",
    todoStage: "completed",
  },
  {
    id: 11,
    description: "📦 Test the new product shipment for dropshipping",
    todoStage: "in progress",
  },
  {
    id: 12,
    description: "📚 Research upcoming trends in AI for fintech",
    todoStage: "to do",
  },
  {
    id: 13,
    description: "🚀 Plan the next podcast marketing campaign",
    todoStage: "completed",
  },
  {
    id: 14,
    description: "🔍 Conduct user testing for the new app feature",
    todoStage: "completed",
  },
  {
    id: 15,
    description: "🌍 Reach out to potential guests for the podcast",
    todoStage: "in progress",
  },
  {
    id: 16,
    description:
      "🗣️ Plan an interview for the next episode of 'The Evening Dew'",
    todoStage: "completed",
  },
  {
    id: 17,
    description:
      "💡 Create a roadmap for the next quarter's product development",
    todoStage: "in progress",
  },
  {
    id: 18,
    description: "📈 Review performance metrics for the dropshipping store",
    todoStage: "in progress",
  },
  {
    id: 19,
    description: "💼 Prepare proposal for new partnership opportunities",
    todoStage: "in progress",
  },
  {
    id: 20,
    description:
      "🧑‍💻 Update team on progress with the serverless deployment pipeline",
    todoStage: "in progress",
  },
];

export type TodoState = ReturnType<() => typeof initialTodoState>;
