import React ,{ useEffect,useState }from "react";
import { useParams } from 'react-router-dom';
import ClassPlan from "../components/plan/classPlan";
import { useLocation } from "react-router";
export default function DetailPlan({id}) {
    const params = useParams();
    const subjectId = params.id;
    const professor = params.professor;
    const location = useLocation();
  console.log(id)

    console.log("subject");
    //const like = [likeClasses, changeLikeClasses];
    console.log(location.state)
    //const like = location.state.likeClasses;
    // console.log(like);
    useEffect(() => {
        console.log(subjectId);
      }, [id]);
    return (
       //<ClassPlan id={subjectId} professor={professor} like={like}/>
       <ClassPlan id={subjectId} professor={professor}/>
    );
}