const thing = {
    attr1: 'val1',
    attr2: 'val2',
    attr3: 'val3'
}

console.log(Object.keys(thing));
console.log(Object.values(thing));
console.log(Object.entries(thing));
console.log(thing['attr1']);


for (const key of Object.keys(thing)) {
    console.log(`Here is a key ${thing[key]}`);
}

