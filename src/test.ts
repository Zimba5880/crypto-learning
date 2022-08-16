import {gcd,exGcd,findPrimitive} from './utils'


// const _gcd = gcd(562668,896400);
// const res = exGcd(562668,896400);
// console.log(`GCD is ${_gcd}`);
// console.log(res);
// console.log(`verify ${res.calcGcd()}`);

const primitves = findPrimitive(10000000);
console.log(primitves);