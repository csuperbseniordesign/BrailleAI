import { getNamesByEthnicityAndGender, Ethnicity, Gender } from "./names"


export const createContext = (
  ethnicity: Ethnicity,
  gender: Gender,
  gradeLevel: string,
  paragraph: string,
): string => {
  return `${paragraph} \n change name to ${getNamesByEthnicityAndGender(ethnicity, gender)} and gender to ${gender}. Keep the paragraph same` }
