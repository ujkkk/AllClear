import {Outlet} from "react-router-dom";
import {useState} from "react";

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