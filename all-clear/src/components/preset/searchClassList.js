import React, { useState } from "react";
import "../../css/searchClassList.css"
import classData from "../../data/classDivision.json";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LikeClass from "./likeClass";


//03. 과목검색 component
const SearchClassList = () => {
        //subject.name.includes(search.trim())
        const [className, setClassName] = useState("");
        const [text, setText] = useState();
        const clickButton = () => {
                console.log("text: "+text)
                setClassName(text);
        }

        //[{subject_id: class.subject_id, type: class.type}]
        return (
                <div id="search-class-warp">
                        <h4>03. 과목 검색</h4>
                        <InputGroup onChange={(e)=>setText(e.target.value)} className="mb-3" style={{ width: "40%", marginTop: "20px", left: "3%" }}>
                                <Form.Control />
                                <Button variant="outline-primary" id="button-addon2" onClick={clickButton}>search</Button>
                        </InputGroup>
                        <br />
                        {
                                classData.map((data, idx) => {
                                        if (data.name.includes(className.trim())) {
                                                return data.class.map((type)=>{
                                                        return <LikeClass likeSub={{ subject_id: data.subject_id, type: type.type }} />
                                        })
                                                
                                        }
                                })
                        }
                </div>
        )
}

export default SearchClassList;