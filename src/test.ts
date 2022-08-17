import {gcd,exGcd,findPrimitive,num2Buffer,buffer2Num,fastPowerMod} from './utils'

const p = 16021597;
const q = 21065563;
const e = 36516283;
const d = 24674960;

const phy = (p-1)*(q-1);
console.log(exGcd(e,phy));

