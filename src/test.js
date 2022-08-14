"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const _gcd = (0, utils_1.gcd)(562668, 896400);
const res = (0, utils_1.exGcd)(562668, 896400);
console.log(`GCD is ${_gcd}`);
console.log(res);
console.log(`verify ${res.calcGcd()}`);
