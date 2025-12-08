export const createContext = (name: string, gender: string): string => {
  const getPronounSet = (genderInput: string) => {
    const normalized = genderInput.toLowerCase().trim();
    
    if (normalized === "male") {
      return { subject: "he", object: "him", possessive: "his" };
    } else if (normalized === "female") {
      return { subject: "she", object: "her", possessive: "her" };
    } else {
      return { subject: "they", object: "them", possessive: "their" };
    }
  };
  
  const pronouns = getPronounSet(gender);
    
  return `CRITICAL INSTRUCTIONS – read carefully and follow as best as you can:

Your task:
Edit the reading passage so that ONLY the MAIN character's name and pronouns are updated.

MAIN CHARACTER:
- Replace the MAIN character's name with "${name}" wherever it appears.
- Replace ONLY the MAIN character's pronouns with:
  - subject: "${pronouns.subject}"
  - object: "${pronouns.object}"
  - possessive: "${pronouns.possessive}"
- Capitalize these pronouns normally when they appear at the start of a sentence.

USE JUDGMENT FOR PRONOUNS:
- Replace a pronoun ONLY if it clearly refers to the main character.
- If a pronoun could refer to a group or someone else, keep it as-is.
- If the passage uses bracketed pronouns like [he], [she], [they]:
  - Replace ONLY the word inside the brackets, not the brackets themselves.
  - Do NOT add brackets if they were not there in the original.
- You MAY make small grammatical adjustments (for example, to subject–verb agreement or wording) if needed so the passage reads naturally with the new name and pronouns.
- Do NOT re-write the whole passage. Keep changes as minimal as possible.

WHAT NOT TO CHANGE (VERY IMPORTANT):
- Do NOT change hobby names (example: rock collecting stays rock collecting)
- Do NOT change object names (example: rocks stay rocks, soccer stays soccer)
- Do NOT change all names to "${name}" – only the primary/main character
- Do NOT change activity names
- Do NOT change any nouns except person names
- Do NOT change the topic or theme of the passage

STYLE:
- Keep all other words and sentences as close to the original as possible.
- Only change what is necessary to:
  1) update the main character's name and pronouns, and
  2) keep the passage grammatical and natural.

Output:
- Return only the modified paragraph, with no explanations or extra text.`;
};
