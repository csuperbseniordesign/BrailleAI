import * as z from "zod";
import {
  birthPlace,
  ethnicityOptions,
  ethnicSubgroupOptions,
  familyBackgroundOptions,
  genderOptions,
  gradeLevelOptions,
  primaryInterestOptions,
} from "./studentFormOptions";

export const looseStudentFormSchema = z.object({
  gradeLevel: z.enum(gradeLevelOptions),
  readingLevel: z.enum(gradeLevelOptions),
  ethnicity: z.enum(ethnicityOptions),
  ethnicSubgroup: z.enum(ethnicSubgroupOptions),
  gender: z.enum(genderOptions),
  familyBackground: z.enum(familyBackgroundOptions),
  birthPlace: z.enum(birthPlace),
  region: z.enum([
    "Northeast",
    "Southeast",
    "Midwest",
    "Southwest",
    "Northwest",
  ]),
  primaryInterest: z.enum(primaryInterestOptions),
});
