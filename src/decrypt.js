"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const buffer_1 = require("buffer");
const n = 337503960964111;
const d = 109444134179659;
const cipher = "AAVlC7Iz7ACWmhyOgf4Ag6JtGfaL";
const nlen = (0, utils_1.num2Buffer)(n).length;
const ciper_buffer = buffer_1.Buffer.from(cipher, 'base64');
let res = [];
for (let i = 0; i < ciper_buffer.length; i = i + nlen) {
    const chunk_buf = [];
    for (let j = 0; j < nlen; j++) {
        if (i + j < ciper_buffer.length) {
            chunk_buf.push(ciper_buffer[i + j]);
        }
    }
    const chunk_num = (0, utils_1.buffer2Num)(chunk_buf);
    const decrypt_num = (0, utils_1.fastPowerMod)(chunk_num, d, n);
    const decrypt_buffer = (0, utils_1.num2Buffer)(decrypt_num);
    res = res.concat(decrypt_buffer);
}
console.log(buffer_1.Buffer.from(res).toString('utf-8'));
