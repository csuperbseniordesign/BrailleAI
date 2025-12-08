// utils/progressTracker.ts

const TOTAL_PARAGRAPHS = 4;
const PROGRESS_KEY = "paragraphsCompleted";

export const initializeProgress = () => {
  if (!sessionStorage.getItem(PROGRESS_KEY)) {
    sessionStorage.setItem(PROGRESS_KEY, "0");
  }
};

export const getProgress = () => {
  const completed = parseInt(sessionStorage.getItem(PROGRESS_KEY) || "0");
  return {
    completed,
    total: TOTAL_PARAGRAPHS,
    current: completed + 1,
    isComplete: completed >= TOTAL_PARAGRAPHS,
  };
};

export const incrementProgress = () => {
  const current = parseInt(sessionStorage.getItem(PROGRESS_KEY) || "0");
  sessionStorage.setItem(PROGRESS_KEY, String(current + 1));
};

export const resetProgress = () => {
  sessionStorage.setItem(PROGRESS_KEY, "0");
};

export const shouldShowProgress = () => {
  // Only show progress after the first demographic survey
  return sessionStorage.getItem("studentId") !== null;
};

// Clear iteration-specific data but keep student info
export const clearIterationData = () => {
  const keysToKeep = [
    "student-code-id",
    "ethnicity",
    "gender",
    "year",
    "gradeLevel",
    "readingLevel",
    "familyBackground",
    "birthPlace",
    "region",
    "languages",
    "country",
    "vision",
    "preferredMedia",
    "appAccess",
    "digitalTextAccess",
    "primaryInterest",  
    "mainlabel",  
    "sublabel",    
    "minAtos",       
    "maxAtos",       
    PROGRESS_KEY,
  ];
  
  const allKeys = Object.keys(sessionStorage);
  allKeys.forEach((key) => {
    if (!keysToKeep.includes(key)) {
      sessionStorage.removeItem(key);
    }
  });
};