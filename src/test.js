"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const p = 16021597;
const q = 21065563;
const e = 36516283;
const d = 24674960;
const phy = (p - 1) * (q - 1);
console.log((0, utils_1.exGcd)(e, phy));
