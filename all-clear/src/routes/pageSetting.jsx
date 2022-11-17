import {Outlet} from "react-router-dom";
import {useState} from "react";

const PageSetting=()=>{
    const [likeClasses, setLikeClasses] = useState([]);
    console.log(likeClasses)
    const changeLikeClasses = (subject_id, aClass, type) => {
      var obj = {subject_id, aClass}
      if(type === 'add'){
        var newLikes = new Set([...likeClasses, obj])
        var newLikesArr = [...newLikes]
        console.log(newLikesArr)
        setLikeClasses(newLikesArr)
        console.log('add')
      }else if (type === 'remove'){
     
      var newLikes = likeClasses.filter(likeClass =>{
        console.log(`${likeClass.subject_id != obj.subject_id} && ${likeClass.aClass !== obj.aClass}`)
        console.log(likeClass.subject_id)
        console.log(obj.subject_id)
        return likeClass.subject_id != obj.subject_id && likeClass.aClass !== obj.aClass
      })
        setLikeClasses(newLikes)
        console.log('remove')
      }
      
    }
    return <Outlet context={{likeClasses,changeLikeClasses}}/>;
}
export default PageSetting;