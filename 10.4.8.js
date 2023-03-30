const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((val) => val * 2)];

// before oneline 
// const removeRandom = (arr) => {
//     const rand = Math.floor(Math.random() * arr.length);
//     return arr.filter((val, i) => i !== rand);
// }
const removeRandom = (arr) => [...arr, Math.floor(Math.random() * arr.length)].filter((val, i, _arr) => (i !== _arr.length - 1 && i !== _arr[_arr.length - 1]));

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// const removeKey = (obj, key) => {
//     const newObj = Object.assign(obj);
//     delete newObj[key];
//     return newObj;
// };
// ^ my solution, but I wanted all these to be one line and unfortunetaly I 
// found this one online first :/
// credit: mikebridge 1/18/18 @ Stackoverflow
const removeKey = ({ [key]: _, ...newObj }, key) => newObj;

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, value) => ({ ...obj, [key]: value });