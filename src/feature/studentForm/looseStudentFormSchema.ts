import * as z from "zod";
import {
  appAccess,
  birthPlace,
  digitalTextAccess,
  ethnicityOptions,
  ethnicSubgroupOptions,
  familyBackgroundOptions,
  genderOptions,
  gradeLevelOptions,
  languages,
  preferredMedia,
  primaryInterestOptions,
  region,
  vision,
} from "./studentFormOptions";

export const looseStudentFormSchema = z
  .object({
    gradeLevel: z.enum(gradeLevelOptions).optional(),
    readingLevel: z.enum(gradeLevelOptions).optional(),
    ethnicity: z.enum(ethnicityOptions).optional(),
    ethnicSubgroup: z.enum(ethnicSubgroupOptions).optional(),
    gender: z.enum(genderOptions).optional(),
    familyBackground: z.enum(familyBackgroundOptions).optional(),
    birthPlace: z.enum(birthPlace).optional(),
    region: z.enum(region).optional(),
    primaryInterest: z.enum(primaryInterestOptions).optional(),
    languages: z.enum(languages).optional(),
    otherLanguage: z.string().optional(),
    country: z.string().optional(),
    year: z.string().optional(),
    vision: z.enum(vision).optional(),
    preferredMedia: z.enum(preferredMedia).optional(),
    appAccess: z.enum(appAccess).optional(),
    otherAppAccess: z.string().optional(),
    digitalTextAccess: z.enum(digitalTextAccess).optional(),
    otherDigitalAccess: z.string().optional(),
  })
  .refine(
    (data) => {
      if(!data.languages) return true;
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
      if (!data.birthPlace) return true;
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
      if (!data.ethnicity) return true;
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
      if (!data.birthPlace) return true;
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
    if(!data.appAccess) return true;
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
    if(!data.digitalTextAccess) return true;
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



