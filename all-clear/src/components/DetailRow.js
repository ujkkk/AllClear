import React, { useState, useEffect } from "react";
import DetailRowComponent from "./detailRowObject";

//02 새부사항 테이블의 한 줄
const DetailRow = ({ rowTitle, rowData = [] }) => {

    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map((data, idx) => <DetailRowComponent title={data} key={idx} />)
                }
            </td>
        </tr>
    )
}

export default DetailRow