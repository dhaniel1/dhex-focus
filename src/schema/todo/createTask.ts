import { z } from "zod";
import { ErrorMessages } from "@/lib/utils/static";

export const createTaskSchema = z.object({
  description: z.string({
    required_error: ErrorMessages.required("Description"),
  }),

  stage: z.string({
    required_error: ErrorMessages.required("Stage"),
  }),
});
