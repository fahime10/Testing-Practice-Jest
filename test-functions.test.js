const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');

test('capitalize', () => {
    expect(capitalize("james")).toBe("James");
});

test('reverseString', () => {
    expect(reverseString("kevin")).toBe("nivek");
});

test('calculator', () => {
    expect((calculator("add", 2, 3))).toBe(5);
    expect((calculator("subtract", 5, 3))).toBe(2);
    expect((calculator("multiply", 2, 3))).toBe(6);
    expect((calculator("divide", 10, 5))).toBe(2);
    expect((calculator("divide", 10, 0))).toBe("Error, cannot divide by 0");
});

test('caesarCipher', () => {
    expect((caesarCipher("aaa"))).toBe("fff");
    expect((caesarCipher("zzz"))).toBe("eee");
});

test('analyzeArray', () => {
    const object = analyzeArray([1, 2, 3, 4, 5]);
    expect(object["average"]).toBe(3);
    expect(object["min"]).toBe(1);
    expect(object["max"]).toBe(5);
    expect(object["length"]).toBe(5);
});