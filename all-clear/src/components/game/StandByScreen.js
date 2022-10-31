import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StanByScreen =({title}) =>{
    const navigate = useNavigate()
    return (
        <div className="">
            <h2>{title}</h2>
            <nav>
               <button onClick ={()=>{
                setTimeout(function(){
                    navigate("/page3")
               },3000)}}>수강신청 Go ~</button>
            </nav>
        </div>
    )
}

export default StanByScreen;