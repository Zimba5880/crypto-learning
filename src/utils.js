"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffer2Num = exports.randomNum = exports.findPrimitive = exports.fastPowerMod = exports.num2Buffer = exports.exGcd = exports.gcd = void 0;
class exGcdVariable {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    calcGcd() {
        if (this.x != null && this.y != null) {
            return this.a * this.x + this.b * this.y;
        }
        else {
            return -1;
        }
    }
}
/**
 * 欧几里得算法，求两个数的最大公约数
 * @param a
 * @param b
 * @return 计算出的最大公约数
 */
const gcd = function (a, b) {
    const high = a > b ? a : b;
    const low = a <= b ? a : b;
    if (low == 0) {
        return high;
    }
    else {
        return gcd(low, high % low);
    }
};
exports.gcd = gcd;
/**
 * 将数字按8bit的块从高位到低位进行分割，输出10进制表示的数组，方便后期转换为buffer格式
 * @param num
 * @returns
 */
const num2Buffer = function (num) {
    if (num < 256) {
        return [num];
    }
    else {
        const remain = num % 256;
        const arr = num2Buffer(Math.trunc(num / 256));
        arr.push(remain);
        return arr;
    }
};
exports.num2Buffer = num2Buffer;
/**
 * 扩展欧几里得算法（对于任意整数a，b，一定存在x，y使得ax+by=gcd(a,b)）
 * @param a
 * @param b
 * @returns
 */
const exGcd = function (a, b) {
    const higher = a > b ? a : b;
    const lower = a <= b ? a : b;
    if (lower == 0) {
        const res = new exGcdVariable(higher, lower);
        res.x = 1;
        res.y = 0;
        return res;
    }
    else {
        const upper = exGcd(lower, higher % lower);
        const res = new exGcdVariable(higher, lower);
        res.x = upper.y;
        res.y = upper.x - Math.trunc(higher / lower) * upper.y;
        return res;
    }
};
exports.exGcd = exGcd;
/**
 * 计算a**b(mod c)
 * @param  a 底数
 * @param  b 指数
 * @param  c 模
 * @returns 结果
 */
const fastPowerMod = function (a, b, c) {
    let res = 1;
    a %= c;
    const b_arr = num2Binary(b);
    b_arr.reverse();
    b_arr.forEach((val) => {
        if (val == 1) {
            res = (res * a) % c;
        }
        a = a * a % c;
    });
    // while (b) {
    //     if(b&1){
    //         res = (res*a)%c
    //     }
    //     a = a*a%c
    //     b>>>=1;
    // }
    return res;
};
exports.fastPowerMod = fastPowerMod;
/**
 * 埃拉托斯特尼筛法求质数
 * @param size 求size以内的所有质数
 * @returns
 */
const findPrimitive = function (size) {
    const arr = new Array(size).fill(true);
    for (let i = 2; i < Math.ceil(Math.sqrt(size)); i++) {
        if (!arr[i]) {
            continue;
        }
        for (let j = i * 2; j < size; j += i) {
            arr[j] = false;
        }
    }
    const res = [];
    arr.forEach((val, index) => {
        if (val) {
            res.push(index);
        }
    });
    return res;
};
exports.findPrimitive = findPrimitive;
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    return Math.random() * (maxNum - minNum + 1) + minNum;
}
exports.randomNum = randomNum;
const buffer2Num = function (buf) {
    let res = 0;
    let buf_r = buf.concat([]);
    buf_r.reverse();
    for (let i = 0; i < buf_r.length; i++) {
        res = res + buf_r[i] * Math.pow(256, i);
    }
    return res;
};
exports.buffer2Num = buffer2Num;
const num2Binary = function (num) {
    if (num < 2) {
        return [num];
    }
    else {
        const remain = num % 2;
        const arr = num2Binary(Math.trunc(num / 2));
        arr.push(remain);
        return arr;
    }
};
