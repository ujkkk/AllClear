import {Outlet} from "react-router-dom";
import {useState} from "react";

//Oulet 컴포넌트를 반환하는 컴포넌트
// 모든 페이지에서 공유해야하는 상태를 가지고 있는 컴포넌트
const PageSetting=()=>{ 
    const [likeClasses, setLikeClasses] = useState([]);
    console.log(likeClasses)
    const changeLikeClasses = (subject_id, type, cmd) => {
      var obj = {subject_id, type}
      if(cmd === 'add'){
        var newLikes = new Set([...likeClasses, obj])
        var newLikesArr = [...newLikes]
        setLikeClasses(newLikesArr)
      }else if (cmd === 'remove'){
        //넘어온 객체만 걸러서 새로운 데이터를 넣음
        var newLikes = likeClasses.filter(likeClass => (likeClass.subject_id != obj.subject_id) ||(likeClass.type !== obj.type))
        setLikeClasses(newLikes)
      }
      
    }
    return <Outlet context={{likeClasses,changeLikeClasses}}/>;
}
export default PageSetting;