
export const atosMapper = (gradeLevel: string) => {
    switch (gradeLevel) {
        case "Grade 1":
          return [1.0, 2.5];
        case "Grade 2":
          return [2.6, 3.5];
        case "Grade 3":
          return [3.6, 4.5];
        case "Grade 4":
          return [4.6, 5.5];
        case "Grade 5":
          return [5.6, 6.5];
        case "Grade 6":
          return [6.6, 7.5];
        case "Grade 7":
          return [7.6, 8.5];
        case "Grade 8":
          return [8.6, 9.5];
        case "Grade 9":
          return [9.6, 10.5];
        case "Grade 10":
          return [10.6, 11.5];
        case "Grade 11":
          return [11.6, 12.5];
        case "Grade 12":
          return [12.6, 13.5];
        default:
          return [1.0, 2.5];
      }
}

export const cleanText = (text: string) => {
    return text.replace(/\\/g, '');
}

export const cleanOptions = (options: string[]): string[] => {
  return options.map(option => option.replace(/\\\*/, '').trim());
};

// Function to find the correct answer
export const findCorrectAnswer = (options: string[]): string | null => {
  const correct = options.find(option => option.startsWith("\\*"));
  return correct ? correct.replace(/\\\*/, '').trim() : null;
};