export const createContext = (
    ethnicity: string,
    gender: string,
    gradeLevel: string,
  ): string => {
    return `In the given paragraph below modify the name to fit for an ${gradeLevel}, ${ethnicity}, ${gender}. Change only the name based off the instructions given. [Optional: Change pronouns if necessary]. Give the modified paragraph only`;
  };