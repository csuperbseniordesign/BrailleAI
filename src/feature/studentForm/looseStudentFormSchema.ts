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
  vision,
  preferredMedia,
  appAccess,
  digitalTextAccess,
} from "./studentFormOptions";

export const looseStudentFormSchema = z
  .object({
    code_id: z.string({
      errorMap: () => ({ message: "Please enter your birth year." }),
    }),
    gradeLevel: z.enum(gradeLevelOptions, {
      errorMap: () => ({ message: "Please select your grade level." }),
    }),
    readingLevel: z.enum(gradeLevelOptions, {
      errorMap: () => ({ message: "Please select your reading level." }),
    }),
    ethnicity: z.enum(ethnicityOptions, {
      errorMap: () => ({ message: "Please select your ethnicity." }),
    }),
    ethnicSubgroup: z.enum(ethnicSubgroupOptions).optional(),
    gender: z.enum(genderOptions, {
      errorMap: () => ({ message: "Please select your gender." }),
    }),
    familyBackground: z.enum(familyBackgroundOptions, {
      errorMap: () => ({ message: "Please select your family background." }),
    }),
    birthPlace: z.enum(birthPlace, {
      errorMap: () => ({ message: "Please select your birthplace." }),
    }),
    region: z.enum(region, {
      errorMap: () => ({ message: "Please select a state or territory." }),
    }),
    primaryInterest: z.enum(primaryInterestOptions, {
      errorMap: () => ({ message: "Please select your primary interest." }),
    }),
    languages: z.enum(languages, {
      errorMap: () => ({ message: "Please select your language." }),
    }),
    otherLanguage: z.string().optional(),
    country: z.string().optional(),
    vision: z.enum(vision, {
      errorMap: () => ({
        message: "Please select your current vision status.",
      }),
    }),
    preferredMedia: z.enum(preferredMedia, {
      errorMap: () => ({
        message: "Please select your preferred learning media.",
      }),
    }),
    appAccess: z.enum(appAccess, {
      errorMap: () => ({
        message: "Please tell use about how you are accessing the web-app.",
      }),
    }),
    otherAppAccess: z.string().optional(),
    digitalTextAccess: z.enum(digitalTextAccess, {
      errorMap: () => ({
        message: "Please tell us about any access technology you use.",
      }),
    }),
    otherDigitalAccess: z.string().optional(),
    year: z
      .string({
        errorMap: () => ({ message: "Please enter your birth year." }),
      })
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
  )
  .refine(
    (data) => {
      if (!data.appAccess) return true;
      if (data.appAccess === "Other (please specify)") {
        return !!data.otherAppAccess;
      }
      return true;
    },
    {
      message: "Please specify how you access the web-app",
      path: ["otherAppAccess"],
    },
  )
  .refine(
    (data) => {
      if (!data.digitalTextAccess) return true;
      if (data.digitalTextAccess === "Other (please specify)") {
        return !!data.otherDigitalAccess;
      }
      return true;
    },
    {
      message: "Please specify about any digital text access you may use.",
      path: ["otherDigitalAccess"],
    },
  );
