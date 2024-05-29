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
    if (user && user.banks && user.banks[2] && user.banks[2].address && user.banks[2].address.city) {
        return user.banks[2].address.city;
    }
    return undefined;
}

const user = {
    name: "Giorgi",
    lastName: "Giorgadze",
    banks: [
        { address: { city: "Batumi"} },
        { address: { city: "Kutaisi"} },
        { address: { city: "Tbilisi"} },
    ]
}

console.log(findCity(user));

const user2 = {
    name: "Mariami",
    lastName: "Abuladze",
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

const deepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const copiedUser = deepCopy(originalUser);

copiedUser.firstName = "Mariami";
copiedUser.profile.age = 30;
copiedUser.skills[0].skill1 = "Angular.js";

console.log('Original User:', originalUser);
console.log('Copied User:', copiedUser);