"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const keys = { p: 6701, q: 2437, n: 16330337, e: 7949, d: 823349 };
const phy = (keys.p - 1) * (keys.q - 1);
const orignal = 123456;
const encrypted = (0, utils_1.fastPowerMod)(orignal, keys.e, keys.n);
const decrypted = (0, utils_1.fastPowerMod)(encrypted, keys.d, keys.n);
console.log(decrypted);
