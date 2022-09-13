import {gcd,exGcd,findPrimitive,num2Buffer,buffer2Num,fastPowerMod} from './utils'

const keys = { p: 6701, q: 2437, n: 16330337, e: 7949, d: 823349 }

const phy = (keys.p-1)*(keys.q-1)

const orignal = 123456;

const encrypted = fastPowerMod(orignal,keys.e,keys.n);

const decrypted = fastPowerMod(encrypted,keys.d,keys.n);

console.log(decrypted);

