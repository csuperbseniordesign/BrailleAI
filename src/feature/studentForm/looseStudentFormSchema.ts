import * as z from "zod";
import { ethnicityOptions, genderOptions, gradeLevelOptions } from "./studentFormOptions";


export const looseStudentFormSchema = z.object({
  gradeLevel: z.enum(gradeLevelOptions),
  ethnicity: z.enum(ethnicityOptions),
  gender: z.enum(genderOptions),
  paragraph: z.string().min(1, "Enter a valid Paragraph"),
});
