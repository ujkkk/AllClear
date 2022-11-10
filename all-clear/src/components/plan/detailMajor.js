import React, { useState, useEffect } from "react";
import DetailRowComponent from "./detailRowObject";

//02 새부사항 테이블의 구분 줄
const DetailMajor = ({ rowTitle, rowData = [], grade, setGrade }) => {
    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map((data, idx) => <DetailRowComponent title={data} key={idx} setData={setGrade} />)
                }
            </td>
        </tr>
    )
}

export default DetailMajor;