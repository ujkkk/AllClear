import React ,{ useEffect }from "react";
import { useParams } from 'react-router-dom';
import ClassPlan from "../components/plan/classPlan";
export default function DetailPlan() {
    const params = useParams();
    const subjectId = params.id;
    const professor = params.professor;
    useEffect(() => {
        console.log(subjectId);
      }, [params.id]);

    return (
       <ClassPlan id={subjectId} professor={professor}/>
    );
}