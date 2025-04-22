export type Ethnicity = 'asian' | 'white' | 'hispanic' | 'black';
export type Gender = 'male' | 'female' | 'nonbinary';

export function getNamesByEthnicityAndGender(ethnicity: Ethnicity, gender: Gender) {
    const ethnicityLower = ethnicity.toLowerCase() as Ethnicity;
    const genderLower = gender.toLowerCase() as Gender;
    const namesByEthnicityAndGender: Record<Ethnicity, Record<Gender, string[]>> = {
        asian: {
            male: ['Li', 'Jin', 'Chen', 'Tao', 'Wei'],
            female: ['Mei', 'Xiu', 'Li', 'Hua', 'Ying'],
            nonbinary: [],
        },
    
        white: {
            male: ['John', 'James', 'Michael', 'David', 'Robert'],
            female: ['Sarah', 'Emily', 'Jessica', 'Anna', 'Lauren'],
            nonbinary: [],
        },
        
        hispanic: {
            male: ['Carlos', 'Juan', 'Pedro', 'Miguel', 'Luis'],
            female: ['Maria', 'Sofia', 'Isabella', 'Ana', 'Lucia'],
            nonbinary: [],
        },

        black: {
            male: ['Caleb', 'Marcus', 'Jaden', 'Tyrone', 'Jamal', 'DeShawn', 'Lamar', 'Marquis'],
            female: ['Aaliyah', 'Maya', 'Nia', 'Tia', 'Brianna', 'Zoe', 'Jada'],
            nonbinary: [],
        }
    };
    
    if(namesByEthnicityAndGender[ethnicityLower] && namesByEthnicityAndGender[ethnicityLower][genderLower]) {
        const names = namesByEthnicityAndGender[ethnicityLower][genderLower]
        const randomIndex = Math.floor(Math.random() * names.length)
        return names[randomIndex]
    }   

    if(gender == 'male') {
        return 'John'
    }

    return 'Ellie'
}