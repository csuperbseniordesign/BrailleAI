import * as z from "zod";

export const looseTeacherFormSchema = z.object({
    response1: z.enum(["1", "2", "3", "4"]),
    response2: z.enum(["1", "2", "3", "4"]),
    response3: z.enum(["1", "2", "3", "4"]),
    response4: z.enum(["1", "2", "3", "4"]),
    response5: z.enum(["1", "2", "3", "4"]),
    response6: z.enum(["1", "2", "3", "4"]),
    response7: z.string(),
});