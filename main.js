// Function 1
const numArray = (...numbers) => {
    if (numbers.length <= 2) {
        return "Input must be more than two"
    }

    const sum = numbers[0] + numbers[1];
    const product = numbers.slice(2).reduce((acc, num) => acc * num, 1);

    return [sum, product];
}

console.log(numArray(3, 5, 4, 1, 6, 2))
console.log(numArray(4, 7, 5, 8))
console.log(numArray(3, 2, 7))

// Function 2
const findCity = (user) => {
    const { banks } = user || {};
    const { address } = (banks && banks[2]) || {};
    const { city } = address || {};

    return city;
}

const user = {
    name: "Giorgi",
    banks: [
        { address: { city: "Batumi"} },
        { address: { city: "Kutaisi"} },
        { address: { city: "Tbilisi"} },
    ]
}

console.log(findCity(user));

const user2 = {
    name: "Mariami",
    banks: [
        { address: { city: "Batumi" } },
        { address: { city: "Kutaisi" } },
        { address: {} }
    ]
}

console.log(findCity(user2));

// Function 3
const objectCopy = (object) => {
    if (object === null || typeof object !== 'object') {
      return object;
    }
  
    let newObject = { ...object };
    for (let key in newObject) {
      newObject[key] = objectCopy(newObject[key]);
    }
  
    return newObject;
  }

  const originalUser = {
    firstName: "Giorgi",
    lastName: "Giorgadze",
    profile: {
        age: 27,
        occupation: "Web Developer",
    }
  };
  
  const copyUser = objectCopy(originalUser);
  
  console.log(copyUser);
  console.log(copyUser === originalUser);
  console.log(copyUser.profile === originalUser.profile);
  console.log(copyUser.profile.age === originalUser.profile.age);
  console.log(copyUser.profile.occupation === originalUser.profile.occupation);