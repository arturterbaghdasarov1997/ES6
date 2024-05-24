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
const originalUser = {
    firstName: "Giorgi",
    lastName: "Giorgadze",
    profile: {
        age: 27,
        occupation: "Web Developer",
    },
    skills: [
        { skill1: "Node.js" },
        { skill2: "React.js" },
    ]
};

const deepCopy = (object) => {
    if (object === null) return null;
    if (typeof object !== 'object') return object;

    if (Array.isArray(object)) {
        return object.map(item => deepCopy(item));
    }

    const result = {};
    for (const fieldName in object) {
        if (object.hasOwnProperty(fieldName)) {
            result[fieldName] = deepCopy(object[fieldName]);
        }
    }
    return result;
}

const copiedUser = deepCopy(originalUser);

copiedUser.firstName = "Mariami";
copiedUser.profile.age = 30;
copiedUser.development.skill1 = "Angular.js"
console.log(originalUser);
console.log(copiedUser);