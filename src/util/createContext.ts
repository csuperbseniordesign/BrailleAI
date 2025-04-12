import { getNamesByEthnicityAndGender, Ethnicity, Gender } from "./names"


export const createContext = (
  ethnicity: Ethnicity,
  gender: Gender,
): string => {
  const selected_name = getNamesByEthnicityAndGender(ethnicity, gender)
  return `Change the name to ${selected_name} and gender to ${gender}` }
 