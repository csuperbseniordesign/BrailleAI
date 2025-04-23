export type NameGroups = {
    [key: string]: {
      'Male': string[];
      'Female': string[];
      'Non-binary': string[];
    };
};

export const namesByEthnicityAndGender: NameGroups = {
    'White': {
        'Male': ['John', 'James', 'Michael', 'David', 'Robert'],
        'Female': ['Sarah', 'Emily', 'Jessica', 'Anna', 'Lauren'],
        'Non-binary': ['Alex'],
    },
    
    'Hispanic': {
        'Male': ['Carlos', 'Juan', 'Pedro', 'Miguel', 'Luis'],
        'Female': ['Maria', 'Sofia', 'Isabella', 'Ana', 'Lucia'],
        'Non-binary': [],
    },

    'Black': {
        'Male': ['Caleb', 'Marcus', 'Jaden', 'Tyrone', 'Jamal', 'DeShawn', 'Lamar', 'Marquis'],
        'Female': ['Aaliyah', 'Maya', 'Nia', 'Tia', 'Brianna', 'Zoe', 'Jada'],
        'Non-binary': [],
    }
};

export const asianNamesByEthnicity: NameGroups = {
    'Chinese': {
        'Male': ['Jason', 'David', 'Lian', 'Brian', 'Kai', 'Chen'],
        'Female': ['Shopia', 'Michelle', 'Amy', 'Jessica', 'Linda', 'Ashley'],
        'Non-binary': []
    },

    'Japanese': {
        'Male': ['Ken', 'Takeshi', 'Tsukasa', 'Hiroshi', 'Kenji', 'Yuji'],
        'Female': ['Yuki', 'Shizuka', 'Hana', 'Emily', 'Nobara', 'Maki'],
        'Non-binary': []
    },

    'Korean' : {
        'Male': ['Jae', 'Eric', 'David', 'Sung', 'Jin'],
        'Female': ['Jinah', 'Junie', 'Cha', 'Grace', 'Hannah'],
        'Non-binary': []
    },

    'Vietnamese' : {
        'Male': ['Brian', 'Hao', 'Nathan', 'Bao' ],
        'Female': ['Jennefir', 'Mai', 'Julie', 'Sophia'],
        'Non-binary': []
    },

    'Asian Indian' : {
        'Male': ['Raj', 'Rohan', 'Dev', 'Arun', 'Rohan', 'Simran'],
        'Female': ['Priya', 'Maya', 'Riya', 'Aanya', 'Mahi'],
        'Non-binary': []
    },

    'Laotian' : {
        'Male': [],
        'Female': [],
        'Non-binary': []
    },

    'Cambodian': {
        'Male': ['Rath', 'Rith', 'Vann', 'Mony', 'Sarin'],
        'Female': ['Mey', 'Dara', 'Lea', 'Sophea', 'Srey'],
        'Non-binary': ['Nara', 'Rith', 'Chea', 'Sok', 'Dara', 'Pich'],
        
    },

    'Thai' : {
        'Male': ['Samran', 'Chai', 'Niran', 'Pong', 'Ananda'],
        'Female': ['Ladda', 'Suda', 'Siri', 'Wara', 'Manee', 'Narin'],
        'Non-binary': ['Rin', 'Saran', 'Nok', 'Preecha', 'Jinda', 'Tida'],
    }
}