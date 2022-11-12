import React from "react";
import "../../css/subjects.css"

//03. 교과목리스트 component
const Subject = ({ data }) => {

    const showPlan = (classId) => {
        console.log(classId);
    }
    return (
        // <Link to={`/datailPlan/${data.subject_id}`} target='_blank' width='300' height='300' style={{color:"black"}}>

            <div className="subject" onClick={() => {
                window.open(`/datailPlan/${data.subject_id}/${data.professor}`, "detail_plan","width=780, height=720");
            }}>
                <div className="subject-name">{data.name}</div>
                <div className="subject-keywords">
                    {
                        data.keyword.map((data,i)=> <div className="keyword" key={i}>{data}</div>)
                    }
                </div>
                <div className="professor">
                    {
                        data.professor.join(" | ")
                    }
                    
                    </div>
            </div>
        
    )
}

export default Subject;