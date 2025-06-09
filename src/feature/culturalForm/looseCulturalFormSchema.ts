import * as z from "zod";

export const looseCulturalFormSchema = z.object({
  question1: z.string(),
  question2: z.string(),
  question3: z.string(),
  characterQuestion1: z.string(),
  characterQuestion2: z.string(),
  characterQuestion3: z.string(),
  characterQuestion4: z.string(),
  experienceQuestion1: z.string(),
  endingQuestion1: z.string(),
  endingQuestion2: z.string(),
  endingQuestion3: z.string(),
  endingQuestion4: z.string(),
  blank: z.string().optional(),
});
