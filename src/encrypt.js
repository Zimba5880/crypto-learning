"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const buffer_1 = require("buffer");
const n = 16330337;
const e = 7949;
const p = "This is plain text";
const nlen = (0, utils_1.num2Buffer)(n).length;
const p_buffer = buffer_1.Buffer.from(p);
let res_buffer = [];
for (let i = 0; i < p_buffer.length; i = i + nlen - 1) {
    const slice = new Array(nlen - 1);
    slice.fill(0);
    for (let j = nlen - 2; j >= 0; j--) {
        if (i + j < p_buffer.length) {
            slice[j] = p_buffer[i + j];
        }
    }
    const chunkNum = (0, utils_1.buffer2Num)(slice);
    const encrypted_chunk = (0, utils_1.fastPowerMod)(chunkNum, e, n);
    const encrypted_buffer_rev = (0, utils_1.num2Buffer)(encrypted_chunk).reverse();
    const encrypted_buffer_chunked = new Array(nlen).fill(0);
    encrypted_buffer_rev.forEach((val, index) => {
        encrypted_buffer_chunked[index] = val;
    });
    res_buffer = res_buffer.concat(encrypted_buffer_chunked.reverse());
}
console.log(buffer_1.Buffer.from(res_buffer).toString('base64'));
