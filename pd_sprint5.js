const listOfPeople = [
  {
    firstName: undefined,
    lastName: undefined,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];
// Zad1
function createNickNames() {
  listOfPeople.forEach((dane) => {
    if (
      isNaN(dane.firstName) &&
      isNaN(dane.lastName) &&
      typeof dane.firstName === "string" &&
      typeof dane.lastName === "string"
    ) {
      nickname = dane.firstName
        .slice(dane.firstName.length - 3, dane.firstName.length)
        .toLowerCase()
        .split("")
        .reverse();
      nickname[0] = nickname[0].toUpperCase();
      const pieceLastName = dane.lastName.slice(0, 3).toLowerCase().split("");
      const lastLetter = pieceLastName[pieceLastName.length - 1];
      pieceLastName[pieceLastName.length - 1] = pieceLastName[0];
      pieceLastName[0] = lastLetter;
      nickname = nickname.concat(pieceLastName).join("");
      dane.nickName = nickname;
    }
  });
}
// Zad2
function addAgeAndFilter() {
  const filteredArray = structuredClone(listOfPeople).filter(
    (person) => person.nickName
  );
  filteredArray.forEach((person) => {
    const sumOfLetters = person.firstName.length + person.lastName.length;
    if (sumOfLetters % 2 === 0) {
      person.age = sumOfLetters;
    } else {
      let index = filteredArray.indexOf(person);
      if (index === 0) {
        index = 1;
      }
      const sumOfLettersInKeys = Object.keys(person).reduce((acc, key) => {
        return acc + key.length;
      }, 0);
      person.age = Math.ceil(sumOfLettersInKeys / index);
    }
  });
  return filteredArray;
}
// Zad3
function frequentLetters() {
  const newArray = structuredClone(newFilterArray);
  newArray.forEach((person) => {
    const letters = {};
    let connectNames = `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}${person.nickName.toLowerCase()}`;
    connectNames = connectNames.split("");
    connectNames.forEach((nameLetter) => {
      if (letters[nameLetter]) {
        letters[nameLetter] += 1;
      } else {
        letters[nameLetter] = 1;
      }
    });
    const letterKeys = Object.keys(letters);
    const letterWithMaxValue = letterKeys.reduce((maxKey, currentKey) => {
      if (letters[currentKey] === letters[maxKey]) {
        return currentKey < maxKey ? currentKey : maxKey;
      } else {
        return letters[currentKey] > letters[maxKey] ? currentKey : maxKey;
      }
    });
    person.mostCommonLetter = {
      letter: letterWithMaxValue,
      count: letters[letterWithMaxValue],
    };
  });
  return newArray;
}

createNickNames();
const newFilterArray = addAgeAndFilter();
const finalArray = frequentLetters();
