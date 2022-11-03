import React, { useState } from "react";
import "../../css/essential.css"
import ButtonLabel from "./buttonLabel";

const CollegeButton = ({ essentialData, changeMajorItem }) => {
    const [color, setColor] = useState(-1);
    return (
        <>
            {
                Object.keys(essentialData).map((data, i) =>
                    <ButtonLabel key={i}
                        color={i === color}
                        index={i}
                        item={essentialData[data]}
                        content={data}
                        changeItem={changeMajorItem}
                        onSelect={setColor} />


                )
            }
        </>);
}
export default CollegeButton;