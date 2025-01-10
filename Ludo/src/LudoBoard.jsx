import { useState } from "react";

export default function LudoBoard(){
    let obj={blue:0,yellow:0,green:0,red:0};
    let [Move,setMove]=useState(obj);
    let [arr,setArr]=useState(["no moves"]);
let updateBlue=()=>{

    setMove((obj)=>{
return {...obj,blue:obj.blue+1};
    });

setArr((array)=>{
    return [...array," bluemoves"];
});

console.log(arr);

}



let updateRed=()=>{
 
    setMove((obj)=>{
return {...obj,red:obj.red+1};
    });
}

let updateYellow=()=>{


    setMove((obj)=>{
return {...obj,yellow:obj.yellow+1};
    });
    

}

let updateGreen=()=>{
   
    setMove((obj)=>{
return {...obj,green:obj.green+1};
    });
 }

    return (
        <div>
        
        <p>Game begins! </p>
        <p>{arr}</p>
        <div className="Board">

            <p>Blue moves  ={Move.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

            <p>Green moves  ={Move.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            
            <p>Yellow moves  ={Move.yellow}</p>
            <button style={{backgroundColor:"yellow" , color:"black"}} onClick={updateYellow}>+1</button>
            
            <p>Red moves ={Move.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
          

        </div>
        </div>

    );
}