import * as z from "zod";

export const looseTeacherFormSchema = z.object({
  response1: z.string(),
  response2: z.string(),
  response3: z.string(),
  response4: z.string(),
  response5: z.string(),
  response6: z.string(),
  response7: z.string(),
});
