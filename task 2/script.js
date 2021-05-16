"use strict";
const arrayOfObjects = [{
        "name": "Johansen Be",
        "position": 1,
        "aims": 15,
        "speed": 18.2
    },
    {
        "name": "Kenneth Fion Maye",
        "position": 3,
        "aims": 10,
        "speed": 17.6
    }, {
        "name": "Sebastian Samuelson",
        "position": 6,
        "aims": 11,
        "speed": 30.1
    }, {
        "name": "Tariei Be",
        "position": 4,
        "aims": 7,
        "speed": 31.1
    }, {
        "name": "Strula Holm Legreid",
        "position": 2,
        "aims": 10,
        "speed": 25.7
    }, {
        "name": "Johannes Dalle",
        "position": 5,
        "aims": 17,
        "speed": 27.1
    }
];
const updateObjectInArray = function (array, key, newKeyValue) {
    const newArray = array.map((item) => {
        // Creating new object to avoid referencing the ones that I have in arrayOfObjects
        const updatedObject = {};
        for (let obj in item) {
            //Saving values from one object into another 
            updatedObject[obj] = item[obj];
        }
        // Reassigning values
        updatedObject[key] = newKeyValue;
        return updatedObject;
    });
    return newArray;
};
console.log(arrayOfObjects);
console.log(updateObjectInArray(arrayOfObjects, "name", "Kevin Mitnick"));
console.log(updateObjectInArray(arrayOfObjects, "speed", "24.3"));
