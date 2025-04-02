"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/components/hooks/use-toast"

import { Form, FormField } from "@/components/ui/form";

import { createTaskSchema } from "@/schema";
import { Button } from "..";
import { DialogFooter, DialogClose } from "../ui/dialog";
import TextArea from "../TextArea";
import FormSelect from "../Select";
import { TodoItem, TodoStage, TODOSTAGE, useTodoContext } from "@/store/todos";
import { capitalize } from "@/lib/utils";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";

const selectObj = [
  { value: TODOSTAGE.TODO, label: capitalize(TODOSTAGE.TODO) },
  { value: TODOSTAGE.INPROGRESS, label: capitalize(TODOSTAGE.INPROGRESS) },
  { value: TODOSTAGE.COMPLETED, label: capitalize(TODOSTAGE.COMPLETED) },
];

export function AddTask() {
  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      description: "",
      stage: TODOSTAGE.TODO,
    },
  });

  const { dispatch } = useTodoContext();

  function onSubmit(data: z.infer<typeof createTaskSchema>) {
    const newTodo: TodoItem = {
      id: Date.now(),
      todoStage: data.stage as TodoStage,
      description: data.description,
    };
    dispatch({ type: TODOACTIONTYPE.CreateTodo, payload: newTodo });
    console.log("Data", data);
  }

  return (
    <div className="pt-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 "
        >
          <div className="flex flex-col w-full gap-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <TextArea
                  required
                  label="Task"
                  placeholder="Input your task here"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="stage"
              render={({ field }) => (
                <FormSelect selectData={selectObj} label="Stage" {...field} />
              )}
            />
          </div>

          <DialogFooter className="sm:justify-start pt-2 mt-4 flex items-center gap-6">
            <DialogClose asChild>
              <Button
                label="Cancel"
                size="sm"
                //   className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
                variant="secondary"
                type="button"
              />
            </DialogClose>
            <DialogClose asChild>
              <Button
                label="Add Task"
                size="sm"
                //   className=" rounded-xl w-[243px] h-14"
                type="submit"
              />
            </DialogClose>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
}
