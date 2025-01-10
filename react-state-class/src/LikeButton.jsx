
import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setIsliked]=useState(false);
    let [click,setClick]=useState(0);
    
let style={color:"red"};

    
    let toggleLike=()=>{
        // click+=1;
        setClick(click+1);


        setIsliked(!isLiked);
        console.log(click);
        }


    return (
<div>
    <p>clicks: {click}</p>
    <p onClick={toggleLike}>

        
        {    isLiked?<i style={style} className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i> }
       
        </p>
       
</div>
    );
}