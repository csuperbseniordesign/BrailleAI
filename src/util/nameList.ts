export type NameGroups = {
  [key: string]: {
    Male: string[];
    Female: string[];
    "Non-binary": string[];
    "Prefer not to say"?: string[];
  };
};

export const namesByEthnicityAndGender: NameGroups = {
  White: {
    Male: ["Johnny", "James", "Michael", "David", "Robert"],
    Female: ["Sarah", "Emily", "Jessica", "Anna", "Lauren"],
    "Non-binary": ["Alex", "Sam", "Asher", "Angel", "Ariel"],
  },

  Hispanic: {
    Male: ["Carlos", "Juan", "Pedro", "Miguel", "Luis"],
    Female: ["Maria", "Sofia", "Isabella", "Ana", "Lucia"],
    "Non-binary": ["Angel", "Ariel", "Cruz", "Mar", "Andrea"],
  },

  "Black or African American": {
    Male: [
      "Caleb",
      "Marcus",
      "Jaden",
      "Tyrone",
      "Jamal",
      "DeShawn",
      "Lamar",
      "Marquis",
    ],
    Female: ["Aaliyah", "Maya", "Nia", "Tia", "Brianna", "Zoe", "Jada"],
    "Non-binary": ["Zion", "Quinn", "Avery", "Jordan", "Pam"],
  },
};

export const asianNamesByEthnicity: NameGroups = {
  Chinese: {
    Male: ["Jason", "David", "Lian", "Brian", "Kai", "Chen"],
    Female: ["Shopia", "Michelle", "Amy", "Jessica", "Linda", "Ashley"],
    "Non-binary": ["Chen", "Yun", "Tian", "Liang", "Hui", "Ming"],
  },

  Japanese: {
    Male: ["Ken", "Takeshi", "Tsukasa", "Hiroshi", "Kenji", "Yuji"],
    Female: ["Yuki", "Shizuka", "Hana", "Emily", "Nobara", "Maki"],
    "Non-binary": ["Ren", "Haru", "Aki", "Tomo", "Makoto"],
  },

  Korean: {
    Male: ["Jae", "Eric", "David", "Sung", "Jin"],
    Female: ["Jinah", "Junie", "Cha", "Grace", "Hannah"],
    "Non-binary": ["Jisoo", "Yun", "Seojin", "Joon", "Hyun", "Jiwon"],
  },

  Vietnamese: {
    Male: ["Brian", "Hao", "Nathan", "Bao"],
    Female: ["Jennefir", "Mai", "Julie", "Sophia"],
    "Non-binary": ["Van", "Anh", "Minh", "Hanh", "Thao"],
  },

  "Asian Indian": {
    Male: ["Raj", "Rohan", "Dev", "Arun", "Rohan", "Simran"],
    Female: ["Priya", "Maya", "Riya", "Aanya", "Mahi"],
    "Non-binary": ["Ira", "Kiran", "Adi", "Shan", "Arya"],
  },

  Laotian: {
    Male: ["Sithat", "Khamla", "Somchai", "Vixay"],
    Female: ["Kanya", "Malai", "Manivone", "Souta", "Chansy"],
    "Non-binary": ["Dao", "Nok", "Seng", "Van", "Siri", "Souli"],
  },

  Cambodian: {
    Male: ["Rath", "Rith", "Vann", "Mony", "Sarin"],
    Female: ["Mey", "Dara", "Lea", "Sophea", "Srey"],
    "Non-binary": ["Nara", "Rith", "Chea", "Sok", "Dara", "Pich"],
  },

  Thai: {
    Male: ["Samran", "Chai", "Niran", "Pong", "Ananda"],
    Female: ["Ladda", "Suda", "Siri", "Wara", "Manee", "Narin"],
    "Non-binary": ["Rin", "Saran", "Nok", "Preecha", "Jinda", "Tida"],
  },
};
