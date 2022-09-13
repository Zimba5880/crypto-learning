import exp from 'constants';
import  {gcd,exGcd,num2Buffer,fastPowerMod,findPrimitive,randomNum} from './utils'

const generateKeypair = function(){
    const primitves = findPrimitive(10000);
    const validprimitves:number[] = [];
    primitves.forEach((val)=>{
        if(val>=1000){
            validprimitves.push(val);
        }
    })

    const p_index = Math.floor(randomNum(0,validprimitves.length));
    const q_index = Math.floor(randomNum(0,validprimitves.length));
    const e_index = Math.floor(randomNum(p_index>q_index?p_index:q_index,validprimitves.length));

    const p = primitves[p_index];
    const q = primitves[q_index];
    const e = primitves[e_index];

    const phy = (p-1)*(q-1);

    const gcdPair = exGcd(e,phy);
    
    const d = gcdPair.a==e?gcdPair.x:gcdPair.y;

    return {
        p:p,
        q:q,
        n:p*q,
        e:e,
        d:d
    }
}

export {generateKeypair};

