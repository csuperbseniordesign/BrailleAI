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
  year: z.string().min(4).max(4).refine(
    (val) => {
      return Number(val) >= 2007 && Number(val) <= new Date().getFullYear();
    },
    {
      message: `Year must be between 2007 and ${new Date().getFullYear()}`,
    }
  )
});
