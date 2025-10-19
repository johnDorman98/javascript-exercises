const findTheOldest = function (people) {
  return people.reduce((previousPerson, currentPerson) => {
    const currentYear = new Date().getFullYear();

    if (!Object.hasOwn(previousPerson, "yearOfDeath")) {
      previousPerson.age = currentYear - previousPerson.yearOfBirth;
    }

    if (!Object.hasOwn(currentPerson, "yearOfDeath")) {
      currentPerson.age = currentYear - currentPerson.yearOfBirth;
    }

    if (!Object.hasOwn(previousPerson, "age")) {
      previousPerson.age =
        previousPerson.yearOfDeath - previousPerson.yearOfBirth;
    }

    if (!Object.hasOwn(currentPerson, "age")) {
      currentPerson.age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    }

    if (currentPerson.age > previousPerson.age) {
      return currentPerson;
    }

    return previousPerson;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
