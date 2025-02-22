import * as z from 'zod';

export const looseStudentFormSchema = z.object({
  gradeLevel: z.enum([
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", 
    "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", 
    "Grade 11", "Grade 12"
  ]),
  ethnicity: z.string().min(2, "Ethnicity must be at least 2 characters"),
  gender: z.enum(["male", "female"]),
  paragraph: z.string().min(10, "Enter a valid Paragraph"),
});
