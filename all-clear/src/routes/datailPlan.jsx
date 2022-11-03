import React ,{ useEffect }from "react";
import { useParams } from 'react-router-dom';
import ClassPlan from "../components/classPlan";
export default function DetailPlan() {
    const params = useParams();
    const subjectId = params.subject_id;
    useEffect(() => {
        const subjectId = params.id;
        console.log(subjectId);
      }, [params.id]);

    return (
       <ClassPlan />
    );
}