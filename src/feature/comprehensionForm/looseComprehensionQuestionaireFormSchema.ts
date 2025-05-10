import * as z from "zod";

export const looseComprehensionQuestionaireFormSchema = z.object({
  "0": z.string().min(1),
  "1": z.string().min(1),
});
