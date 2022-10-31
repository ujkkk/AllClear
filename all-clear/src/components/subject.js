import React, { useState, useEffect } from "react";
import "../css/subjects.css"

//03. 교과목리스트 component
const Subject = ({ data }) => {
    return (
        <div className="subject">
            <div className="subject-name">{data.name}</div>
            <div className="subject-keywords">
                {
                    data.keyword.map((data,i)=> <div className="keyword" key={i}>{data}</div>)
                }
            </div>
            <div className="professor">
                {
                    data.professor.join("교수님 | ")
                }
                교수님
                </div>
        </div>
    )
}

export default Subject;