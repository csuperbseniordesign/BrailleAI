import * as z from "zod";

export const looseCulturalFormSchema = z.object({
  question1: z.string().optional(),
  question2: z.string().optional(),
  question3: z.string().optional(),
  characterQuestion1: z.string().optional(),
  characterQuestion2: z.string().optional(),
  characterQuestion3: z.string().optional(),
  characterQuestion4: z.string().optional(),
  experienceQuestion1: z.string().optional(),
  endingQuestion1: z.string().optional(),
  endingQuestion2: z.string().optional(),
  endingQuestion3: z.string().optional(),
  endingQuestion4: z.string().optional(),
  blank: z.string().optional(),
});
