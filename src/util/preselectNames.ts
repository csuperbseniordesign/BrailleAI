import { asianNamesByEthnicity, NameGroups, namesByEthnicityAndGender } from "./nameList";


export type genderType = 'Male' | 'Female' | 'Non-binary';

export function getValue(ethnicNames: NameGroups, gender: genderType, ethnicity: string) {
    const ethnicities = ethnicNames[ethnicity];
    console.log(ethnicities)

    // if ethnicity and gender exist
    if(ethnicities && ethnicities[gender]) {
        console.log(gender)
        console.log(ethnicities[gender])
        const nameList = ethnicNames[ethnicity][gender]
        const randomIndex = Math.floor(Math.random() * nameList.length);
        return nameList[randomIndex];
    }

    // if ethnicity doesn't exist, gender exist
    if(!ethnicities && ethnicNames['White'][gender]) {
        console.log(gender)
        const nameList = ethnicNames['White'][gender]
        const randomIndex = Math.floor(Math.random() * nameList.length);
        return nameList[randomIndex];
    }

    // if ethnicity and gender keys exist, return a random name from the list
    const nameList = ethnicNames['White']['Non-binary'];
    const randomIndex = Math.floor(Math.random() * nameList.length);

    return nameList[randomIndex];
        
}


export function getNamesByEthnicityAndGender(ethnicity: string, gender: string, ethnicSubgroup: string) {
    if(ethnicity == "Asian") {
       return getValue(asianNamesByEthnicity, 
        gender as genderType, ethnicSubgroup)
    }

    return getValue(namesByEthnicityAndGender, gender as genderType, ethnicity);
}
