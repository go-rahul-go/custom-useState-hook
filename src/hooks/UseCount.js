import {useState} from "react"


const UseCount = ()=>{
    const [count,setCount]=useState(0);
    const increase =()=> setCount(count+1);
    const decrease = ()=>{
        if(count>0)
            setCount(count-1)
    };
    
    return [count,increase,decrease];
}


export default UseCount;