import { capitalize } from "@/lib/utils";
import { TodoItem } from "@/store/todos";

const DeleteDialogContent = ({ data }: { data: TodoItem }) => {
  return (
    <div className="bg-gray-100 rounded-md p-3">
      <p>
        <span className="font-medium ">Task:</span>
        {data.description}
      </p>
      <p>
        <span className="font-medium ">Stage:</span>
        {capitalize(data.todoStage)}
      </p>
    </div>
  );
};

export default DeleteDialogContent;
