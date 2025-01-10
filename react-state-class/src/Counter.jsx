import { useState } from "react";
function init(){
    
    return Math.random();
    }
    export default function Counter(){
        let [count,setCount]=useState(init); // it is read but not executed(ignore) 
        console.log("Comooonentt was r rendered!");
    
        let incCount=()=>{
           
            
            setCount((currCount)=>{
                return currCount+1;
            });
            setCount((currCount)=>{
                return currCount+1;
            });
                // setCount(25); 
            
        }
    
    



        return (
            <div>
                    <h3>count:{count}</h3>
                    <button onClick={incCount}>Increase count</button>
                </div>
            );
            
        }