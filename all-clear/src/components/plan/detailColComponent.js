import React, { useEffect } from "react";
import DetailRowComponent from "./detailRowObject";

//02 새부사항 테이블의 학년 줄
const DetailColComponent = ({ rowTitle,colorOn, rowData = [],items, changeItems }) => {
    useEffect(()=>{
        if(items.length===0||items.length===rowData.length-1){
            changeItems(rowData.map(data=>data));
        }
    },[items,rowData,changeItems]);
    const setItemData=(prop)=>{
        if(prop=="전체"){
            changeItems(rowData.map(data=>data));
            return;
        }
     
        if((items.indexOf(prop)!==-1)&&items.indexOf("전체")!==-1){
            changeItems(items.filter((data)=>data===prop))
            return;
        }
        (items.indexOf(prop)!==-1)?
        changeItems(items.filter(item=>prop!==item)):
        changeItems([...items,...rowData.filter(data=>data===prop)])
            
    }
    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map((data, idx) => <DetailRowComponent color={items.filter(item=>item===data).join()===data} colorOn={colorOn} title={data} key={idx} setData={setItemData} />)
                }
            </td>
        </tr>
    )
}

export default DetailColComponent;