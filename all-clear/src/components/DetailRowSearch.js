import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const DetailRowSearch = ({ rowTitle }) => {

    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                <InputGroup className="mb-3" style={{ width: "30%", marginTop: "20px", left: "3%" }}>
                    <Form.Control />  {' '}
                    <Button variant="outline-primary" id="button-addon2">search</Button>
                </InputGroup>
            </td>
        </tr>
    )
}


export default DetailRowSearch;