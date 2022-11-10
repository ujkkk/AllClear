import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//02 세부사항- 강의명 검색하는 행
const DetailRowSearch = ({ rowTitle,changeSearch }) => {
    const [text,setText]=useState();
    const clickButton=()=>{
        changeSearch(text);
    }
    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                <InputGroup onChange={(e)=>setText(e.target.value)} className="mb-3" style={{ width: "30%", marginTop: "20px", left: "3%" }}>
                    <Form.Control />
                    <Button variant="outline-primary" id="button-addon2" type="submit" onClick={clickButton}>search</Button>
                </InputGroup>
            </td>
        </tr>
    )
}


export default DetailRowSearch;