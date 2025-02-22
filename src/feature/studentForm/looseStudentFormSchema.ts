import * as z from 'zod';

export const looseStudentFormSchema = z.object({
  gradeLevel: z.string().min(2, "Grade level must be at least 2 characters"),
  ethnicity: z.string().min(2, "ethnicity must be at least 2 characters"),
  gender: z.enum(["male", "female"])
});
