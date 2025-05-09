import * as z from "zod";
import {
  birthPlace,
  ethnicityOptions,
  ethnicSubgroupOptions,
  familyBackgroundOptions,
  genderOptions,
  gradeLevelOptions,
  languages,
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
  languages: z.enum(languages),
  otherLanguage: z.string().optional(),
  country: z.string().optional(),
  year: z.string().min(4).max(4).refine(
    (val) => {
      return Number(val) >= 2007 && Number(val) <= new Date().getFullYear();
    },
    {
      message: `Year must be between 2007 and ${new Date().getFullYear()}`,
    }
  ),
}).refine(
  (data) => {
    if (data.languages === "Other (please specify)") {
      return !!data.otherLanguage;
    }
    return true;
  },
  {
    message: "Please specify the language",
    path: ["otherLanguage"],
  }
)
.refine(
  (data) => {
    if (data.birthPlace === "United States") {
      return true;
    }
    return !!data.country;
  },
  {
    message: "Country is required if birth place is not United States",
    path: ["country"],
  }
);

/**
 *   otherLanguage: z.string().optional(),}).refine(
    (data) => {
      if(data.languages != "Other (please specify)") {
        return true;
      }
      return !!data.otherLanguage;
    },
    {
      message: "Please specify the language"
    }
  ),
  country: z.string().optional(),
}).refine(
  (data) => {
    if (data.birthPlace === "United States") {
      return true; // country is optional
    }
    return !!data.country; // country is required
  },
  {
    message: "Country is required if birth place is not United States",
    path: ["country"],
  }
);
 */