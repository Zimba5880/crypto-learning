

class exGcdVariable {

    x?:number;
    y?:number;
    a:number;
    b:number;

    constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    }

    public calcGcd():number{
        if(this.x!=null&&this.y!=null){
            return this.a*this.x+this.b*this.y;
        }
        else{
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
const gcd = function(a:number,b:number):number{
    const high = a>b?a:b
    const low = a<=b?a:b

    if(low == 0){
        return high;
    }
    else{
        return gcd(low,high%low);
    }
    
}
/**
 * 将数字按8bit的块从高位到低位进行分割，输出10进制表示的数组，方便后期转换为buffer格式
 * @param num 
 * @returns 
 */
const num2Buffer = function(num:number):number[]{
    if(num < 256){
        return [num]
    }
    else{
        const remain = num%256;
        const arr = num2Buffer(Math.trunc(num/256));
        arr.push(remain);
        return arr;
    }
}


/**
 * 扩展欧几里得算法（对于任意整数a，b，一定存在x，y使得ax+by=gcd(a,b)）
 * @param a 
 * @param b 
 * @returns 
 */
const exGcd = function(a:number,b:number):exGcdVariable{

    const higher = a>b?a:b;
    const lower = a<=b?a:b;

    if(lower == 0){
        const res = new exGcdVariable(higher,lower);
        res.x=1;
        res.y=0;
        return res;
    }
    else{
        const upper = exGcd(lower,higher%lower);
        const res = new exGcdVariable(higher,lower);
        res.x = upper.y;
        res.y = upper.x! - Math.trunc(higher/lower)*upper.y!;
        return res;
    }

}

/**
 * 计算a**b(mod c)
 * @param  a 底数
 * @param  b 指数
 * @param  c 模
 * @returns 结果
 */
 const fastPowerMod = function (a:number, b:number, c:number):number{
    let res = 1;
    a %= c

    while (b) {
        if(b&1){
            res = (res*a)%c
        }
        a = a*a%c
        b>>=1;
    }
    return res
}


/**
 * 埃拉托斯特尼筛法求质数
 * @param size 求size以内的所有质数
 * @returns 
 */
const findPrimitive = function(size:number):number[]{
    const arr = new Array<boolean>(size).fill(true);
    for(let i=2;i<Math.ceil(Math.sqrt(size));i++){
        if(!arr[i]){
            continue;
        }
        for(let j=i*2;j<size;j+=i){
            arr[j]=false;
        }
    }

    const res:number[] = [];
    arr.forEach((val,index)=>{
        if(val){
            res.push(index);
        }
    })

    return res;
}


export {gcd,exGcd,num2Buffer,fastPowerMod,findPrimitive}