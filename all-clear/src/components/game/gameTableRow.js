import React,{useState} from "react";
import GameTableElement from "./gameTableElement";
import PresetRowElement from "./presetRowElement";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import "../../css/dropDownBtn.css";
const options = ['2.4 초','5 초','10 초']


const defaultOption = options[0];

const GameTableRow = ({id, title, hiddenRow, setHiddenRow, setGameSetInfo}) =>{ 

    const setTableElement = (index) => { 
        if (index ==  0) { return <td colspan={"2"}>
            <GameTableElement value = "있음" setHiddenRow = {()=>setHiddenRow(8)} editGameSetInfo = {()=>setGameSetInfo({useCart:true, preset:1})}></GameTableElement>
            <GameTableElement value = "없음" setHiddenRow = {()=>setHiddenRow(1)} editGameSetInfo = {()=>setGameSetInfo({useCart:false, preset:0})}></GameTableElement>
        </td> }
        if (index == 1){
            return <>
                <td colspan={"3"}>
                    <PresetRowElement total={3} onSelect = {setGameSetInfo}></PresetRowElement>
                </td>
             </>
        }
        if (index == 2){
            return <td><DropdownList defaultValue={defaultOption} data={options} style = {{textAlign:"center"}} onChange = {(value)=>setGameSetInfo({runTime:value.split(" ")[0]})}></DropdownList></td>     
        }
        if (index == 3){
            return <td><input onChange={(e)=>{setGameSetInfo({name:e.target.value})}} type ="text" style={{textAlign:"center",borderRadius:"10px",width:"350px"}}></input></td>     
        }
      
    }

    return (
        id !== hiddenRow && // 조건부 랜더링
        <tr id = {id}>
            <th>{title}</th> {setTableElement(id)}       
        </tr>
    )
}

export default GameTableRow;