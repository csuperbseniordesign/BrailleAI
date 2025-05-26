import * as z from "zod";

export const looseTeacherFormSchema = z.object({
  response1: z.enum(["1", "2", "3", "4"]).optional(),
  response2: z.enum(["1", "2", "3", "4"]).optional(),
  response3: z.enum(["1", "2", "3", "4"]).optional(),
  response4: z.enum(["1", "2", "3", "4"]).optional(),
  response5: z.enum(["1", "2", "3", "4"]).optional(),
  response6: z.enum(["1", "2", "3", "4"]).optional(),
  response7: z.string().optional(),
  blank: z.string().optional(),
});
