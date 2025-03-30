import * as z from "zod";
import {
  ethnicityOptions,
  genderOptions,
  gradeLevelOptions,
  primaryInterestOptions,
} from "./studentFormOptions";

export const looseStudentFormSchema = z.object({
  gradeLevel: z.enum(gradeLevelOptions),
  ethnicity: z.enum(ethnicityOptions),
  gender: z.enum(genderOptions),
  primaryInterest: z.enum(primaryInterestOptions),
});
