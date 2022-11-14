import React from "react";
import {BsCheck,BsBagCheck} from "react-icons/bs"
import {FcCancel} from "react-icons/fc"

const GameTableElement = ({ value, setHiddenRow = f=>f}) =>{ 
    return (
      <button onClick = {setHiddenRow} style = {{fontSize:"30px",lineHeight:"1.5",display:"inline-block",marginRight:"40px",borderRadius:"10px"}}>
        {value+" "}
        { value == "있음" && <BsCheck color="green"></BsCheck>}
        { value == "없음" && <FcCancel></FcCancel>}
        </button>
    )
}

export default GameTableElement;