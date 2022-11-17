import {Outlet} from "react-router-dom";
import {useState} from "react";

//Oulet 컴포넌트를 반환하는 컴포넌트
// 모든 페이지에서 공유해야하는 상태를 가지고 있는 컴포넌트
const PageSetting=()=>{ 
    const [likeClasses, setLikeClasses] = useState([]);
    const changeLikeClasses = (subject_id, aClass) => {
      var obj = {subject_id, aClass}
      var newLikes = new Set([...likeClasses, obj])
      var newLikesArr = [...newLikes]
      console.log(newLikesArr)
      setLikeClasses(newLikesArr)
    }
    return <Outlet context={{likeClasses,changeLikeClasses}}/>;
}
export default PageSetting;