import { TASKFORMTYPE } from "@/lib/utils/static";
import { TodoItem, useTodoContext } from "@/store/todos";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import { TaskForm } from "../forms";
import Dialog from "../Dialog";
import DeleteDialogContent from "./deleteDialog";
import { SVGIcons } from "../shared";

const TodoActions = ({
  data,
  dataIndex,
}: {
  data: TodoItem;
  dataIndex: number;
}) => {
  const { dispatch } = useTodoContext();
  const { DeleteIcon, EditIcon } = SVGIcons;

  function confirmDelete() {
    dispatch({
      type: TODOACTIONTYPE.DeleteTodo,
      payload: { index: dataIndex, todoStage: data.todoStage },
    });
  }

  const iconStyle =
    "hover:bg-[#F3F3FE] rounded-full p-0.5 cursor-pointer hover:stroke-primary/50 hover:text-primary/50 box-content ";

  return (
    <div
      className="flex items-center gap-1 justify-center bg-white rounded-lg z-80 absolute top-1/2 transform -translate-y-1/2 right-3 p-2 shadow-md cursor-auto"
      style={{ boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)" }}
    >
      <Dialog
        dialogTitle="Edit Task"
        enableFooter={false}
        // confirmAction={confirmEdit}
        dialogContent={
          <TaskForm
            type={TASKFORMTYPE.EDIT}
            editData={data}
            dataIndex={dataIndex}
          />
        }
      >
        <EditIcon
          className={iconStyle}
          style={{ height: "1.6rem", width: "1.6rem" }}
        />
      </Dialog>

      <Dialog
        dialogTitle="Confirm Delete"
        dialogDescription={`Are you sure you want to delete this task?`}
        dialogContent={<DeleteDialogContent data={data} />}
        confirmAction={confirmDelete}
      >
        <DeleteIcon
          className={iconStyle}
          style={{ height: "1.4rem", width: "1.5rem" }}
        />
      </Dialog>
    </div>
  );
};

export default TodoActions;
