import * as z from "zod";

export const looseCulturalFormSchema = z.object({
  question1: z.string().optional(),
  question2: z.string().optional(),
  question3: z.string().optional(),
  question4: z.string().optional(), 
  question5: z.string().optional(),
  question6: z.string().optional(),
  question7: z.string().optional(),
  question8: z.string().optional(),
  blank: z.string().optional(),
});
