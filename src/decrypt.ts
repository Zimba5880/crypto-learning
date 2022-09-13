import {buffer2Num, fastPowerMod, num2Buffer} from './utils'
import { Buffer } from 'buffer';

const n = 16330337;
const d = 823349;

const cipher = "FRODoTxR6WA3M9lKqQLlAFNxPKNJidQsnxDU";

const nlen = num2Buffer(n).length;

const ciper_buffer = Buffer.from(cipher,'base64');

let res:number[] = [];

for(let i=0;i<ciper_buffer.length;i=i+nlen){
    const chunk_buf:number[] = [];
    for(let j=0;j<nlen;j++){
        if(i+j<ciper_buffer.length){
            chunk_buf.push(ciper_buffer[i+j]);
        }
    }
    const chunk_num = buffer2Num(chunk_buf);
    const decrypt_num = fastPowerMod(chunk_num,d,n);
    const decrypt_buffer = num2Buffer(decrypt_num);
    res = res.concat(decrypt_buffer);
}

console.log(Buffer.from(res).toString('utf-8'));