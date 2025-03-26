import * as z from 'zod';

export const looseCulturalFormSchema = z.object({
    question1: z.string(),
    question2: z.string(),
    question3: z.string(),
    question4: z.string(),
    question5: z.string(),
    question6: z.string(),
    question7: z.string(),
    question8: z.string(),
});