import * as z from 'zod';

export const looseComprehensionQuestionaireFormSchema = z.object({
    answer : z.string().min(1),
});