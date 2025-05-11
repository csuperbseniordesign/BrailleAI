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
  region,
} from "./studentFormOptions";

export const looseStudentFormSchema = z
  .object({
    gradeLevel: z.enum(gradeLevelOptions, {
      errorMap: () => ({ message: "Please select your grade level" }),
    }),
    readingLevel: z.enum(gradeLevelOptions, {
      errorMap: () => ({ message: "Please select your reading level" }),
    }),
    ethnicity: z.enum(ethnicityOptions, {
      errorMap: () => ({ message: "Please select your ethnicity" }),
    }),
    ethnicSubgroup: z.enum(ethnicSubgroupOptions).optional(),
    gender: z.enum(genderOptions, {
      errorMap: () => ({ message: "Please select your gender" }),
    }),
    familyBackground: z.enum(familyBackgroundOptions, {
      errorMap: () => ({ message: "Please select your family background" }),
    }),
    birthPlace: z.enum(birthPlace, {
      errorMap: () => ({ message: "Please select your birthplace" }),
    }),
    region: z
      .enum(region)
      .optional(),
    primaryInterest: z.enum(primaryInterestOptions, {
      errorMap: () => ({ message: "Please select your primary interest" }),
    }),
    languages: z.enum(languages, {
      errorMap: () => ({ message: "Please select your language" }),
    }),
    otherLanguage: z.string().optional(),
    country: z.string().optional(),
    year: z
      .string({ errorMap: () => ({ message: "Please enter your birth year" }) })
      .min(4)
      .max(4)
      .refine(
        (val) => {
          return Number(val) >= 2007 && Number(val) <= new Date().getFullYear();
        },
        {
          message: `Year must be between 2007 and ${new Date().getFullYear()}`,
        },
      ),
  })
  .refine(
    (data) => {
      if (data.languages === "Other (please specify)") {
        return !!data.otherLanguage;
      }
      return true;
    },
    {
      message: "Please specify the language",
      path: ["otherLanguage"],
    },
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
    },
  )
  .refine(
    (data) => {
      if (data.ethnicity === "Asian") {
        return !!data.ethnicSubgroup;
      }

      return true;
    },
    {
      message: "Please select your ethnic subgroup",
      path: ["ethnicSubgroup"],
    },
  )
  .refine(
    (data) => {
      if (data.birthPlace === "Outside of the United States") {
        return true;
      }
      return !!data.region;
    },
    {
      message: "Please select your region",
      path: ["region"],
    },
  );
