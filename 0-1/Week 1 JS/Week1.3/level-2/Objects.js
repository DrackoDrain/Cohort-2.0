
// Assign to a new value -> Object.assign({},obj, {zxy:"zdh"})
const obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4 : "value4",
};

let newObj = Object.assign({}, obj, { newProperty: "newValue"});
console.log("After Object.Assign" , newObj);
