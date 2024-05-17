"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let cash = 12567;
let level;
let numbers = [1, 2, 3];
let user = [1, 'Toyibah'];
const small = 1;
const medium = 2;
const large = 3;
;
var StringSize;
(function (StringSize) {
    StringSize["small"] = "s";
    StringSize["medium"] = "m";
    StringSize["large"] = "l";
})(StringSize || (StringSize = {}));
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = { id: 1,
    name: 'Toyibah',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = { id: 1,
    name: 'Toyibah',
    retire: (date) => {
        console.log(date);
    }
};
function kgToPounds(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToPounds(10);
kgToPounds('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
let quantities = 100;
let metric = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map