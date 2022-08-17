import {buffer2Num, fastPowerMod, num2Buffer} from './utils'
import { Buffer } from 'buffer';

const n = 337503960964111;

const e = 36516283;

const p = "This is plain text";

const nlen = num2Buffer(n).length;

const p_buffer = Buffer.from(p);

let res_buffer:number[] = [];

for(let i=0;i<p_buffer.length;i=i+nlen-1){
    const slice = new Array<number>(nlen-1);
    slice.fill(0);
    for(let j=nlen-2;j>=0;j--){
        if(i+j<p_buffer.length){
            slice[j]=p_buffer[i+j];
        }
    }
    const chunkNum = buffer2Num(slice);
    const encrypted_chunk = fastPowerMod(chunkNum,e,n);
    const encrypted_buffer_rev = num2Buffer(encrypted_chunk).reverse();
    const encrypted_buffer_chunked = new Array<number>(nlen).fill(0);
    encrypted_buffer_rev.forEach((val,index)=>{
        encrypted_buffer_chunked[index]=val;
    })
    res_buffer = res_buffer.concat(encrypted_buffer_chunked.reverse());
}

console.log(Buffer.from(res_buffer).toString('base64'));
