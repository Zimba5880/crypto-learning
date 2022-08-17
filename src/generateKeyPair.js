"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeypair = void 0;
const utils_1 = require("./utils");
const generateKeypair = function () {
    const primitves = (0, utils_1.findPrimitive)(50000000);
    const validprimitves = [];
    primitves.forEach((val) => {
        if (val >= 10000000) {
            validprimitves.push(val);
        }
    });
    const p_index = Math.floor((0, utils_1.randomNum)(0, validprimitves.length));
    const q_index = Math.floor((0, utils_1.randomNum)(0, validprimitves.length));
    const e_index = Math.floor((0, utils_1.randomNum)(p_index > q_index ? p_index : q_index, validprimitves.length));
    const p = primitves[p_index];
    const q = primitves[q_index];
    const e = primitves[e_index];
    const phy = (p - 1) * (q - 1);
    const gcdPair = (0, utils_1.exGcd)(e, phy);
    const d = gcdPair.a == e ? gcdPair.x : gcdPair.y;
    return {
        p: p,
        q: q,
        n: p * q,
        e: e,
        d: d
    };
};
exports.generateKeypair = generateKeypair;
