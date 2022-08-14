"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num2Buffer = exports.exGcd = exports.gcd = void 0;
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
        const remain = high % low;
        return gcd(low, remain);
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
