import React,{ useState }  from "react";
import "../css/search.css"
import ButtonLabel from "./buttonLabel";


const MajorButton=({majorItem, changeTrackItem, setSearch})=>{
    const [color,setColor]=useState(-1);
    return(
    <>{
        majorItem.map((data,i)=>
        <ButtonLabel key={i}
        color={i===color}
        index={i}
        item={data.class}
        content={data.id}
        changeItem={changeTrackItem}
        onSelect={setColor}
        setData={setSearch}/>
    )
    }
    </>);
}

export default MajorButton;