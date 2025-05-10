import {
  asianNamesByEthnicity,
  NameGroups,
  namesByEthnicityAndGender,
} from "./nameList";

export type genderType = "Male" | "Female" | "Non-binary";

function getRandomName(
  ethnicNames: NameGroups,
  gender: genderType,
  ethnicity: string,
) {
  const nameList = ethnicNames[ethnicity][gender];
  const randomIndex = Math.floor(Math.random() * nameList.length);
  return nameList[randomIndex];
}

// checks if valid ethnicty and gender key exist
function checkKeys(
  ethnicNames: NameGroups,
  gender: genderType,
  ethnicity: string,
) {
  const ethnicities = ethnicNames[ethnicity];

  // if ethnicity and gender exist
  if (ethnicities && ethnicities[gender]) {
    return getRandomName(ethnicNames, gender, ethnicity);
  }

  // if ethnicity doesn't exist, gender exist
  else if (!ethnicities && ethnicNames["White"][gender]) {
    return getRandomName(ethnicNames, gender, "White");
  } else if (ethnicities && !ethnicities[gender]) {
    return getRandomName(ethnicNames, "Non-binary", ethnicity);
  }

  // if ethnicity and gender keys exist, return a random name from the list
  return getRandomName(ethnicNames, "Non-binary", "White");
}

export function getNamesByEthnicityAndGender(
  ethnicity: string,
  gender: string,
  ethnicSubgroup: string,
) {
  if (ethnicity == "Asian") {
    return checkKeys(
      asianNamesByEthnicity,
      gender as genderType,
      ethnicSubgroup,
    );
  }

  return checkKeys(namesByEthnicityAndGender, gender as genderType, ethnicity);
}
