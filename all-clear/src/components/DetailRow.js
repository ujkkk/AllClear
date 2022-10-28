import React, { useState, useEffect } from "react";
import DetailRowComponent from "./DetailRowObject";


const DetailRow = ({ rowTitle, rowData = [] }) => {

    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map(data => <DetailRowComponent title={data} />)
                }
            </td>
        </tr>
    )
}

export default DetailRow