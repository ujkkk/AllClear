

import React from "react";
import "../../css/gameScheduleList.css"

const GameScheduleList = ({ gameSchedule, checkdeleteClass = f => f }) => {

    return (
        <>
            {
                gameSchedule.map((schedule, i) => (
                    <div className="schedule-list">
                        <div className="code" key={i}>{`${i + 1} - [${schedule.code}] ${schedule.name}`}</div>
                        <div className="info"> {`${schedule.type} | 전선 | 3 | ${schedule.professor.join(", ")} |`} <div className="track">트랙</div> | </div>
                        <button className="cancel-btn" type={"button"} onClick={() => checkdeleteClass(schedule)} style={{ marginLeft: "5px" }}>
                            <span>취 소</span>
                        </button>
                    </div>
                ))
            }
        </>
    )
}

export default GameScheduleList;