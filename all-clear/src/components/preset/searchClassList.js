import React, { useState } from "react";
import "../../css/searchClassList.css"
import classData from "../../data/classDivision.json";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LikeClass from "./likeClass";

//03. 과목검색 component
const SearchClassList = ({ likeSub, setPreset = f => f ,changeLikeClasses}) => {
        var index = 0
        //subject.name.includes(search.trim())
        const [className, setClassName] = useState("");
        const [text, setText] = useState();
        const clickButton = () => {
                console.log("text: " + text)
                setClassName(text);
        }
        const [likes, setLikes] = useState(classData.map(aClass => Array.from({length : 10}, ()=>false)));
        classData.map((aClass, i) => {
                likeSub.map(likeSubject => {
                        //console.log(likeSubject)
                        if(aClass.subject_id == likeSubject.subject_id){
                                
                                aClass.class.map((p, j) => p.type === likeSubject.type? likes[i][j] = true: false)
                        }
                        return
                })
                return
        })
        console.log(likes)


        const toggleLike = (e, index, index2, like_obj) =>{
                //이벤트 핸들링 막기 - 부모와 자식 이벤트 겹치는 경우 부모 이벤트도 실행되는 현상 없애기
                e.stopPropagation() 
                const newLikes = likes.map((like, i) => {
                        if(i == index)
                                return like.map((like2, j) => j == index2? !like2: like2)
                        return like;
                }) 
                if(newLikes[index][index2]){
                        changeLikeClasses(like_obj.subject_id, like_obj.type, 'add')
                }else{
                        changeLikeClasses(like_obj.subject_id, like_obj.type, 'remove')
                }
                
                setLikes(newLikes);
        }

        //[{subject_id: class.subject_id, type: class.type}]
        return (
                <div id="search-class-warp">
                        <h4>03. 과목 검색</h4>
                        
                        <InputGroup onChange={(e) => setText(e.target.value)} className="mb-3" style={{ width: "40%", marginTop: "20px", left: "3%" }}>
                                <Form.Control />
                                <Button variant="outline-primary" id="button-addon2" onClick={clickButton}>search</Button>
                        </InputGroup>
                        <br />
                        <div id="search-class-component">
                        {

                                classData.map((data, idx) => {
                                        
                                        if (data.name.includes(className.trim())) {                                      
                                                return data.class.map((type, i) => {
                                                        return <LikeClass key={i} likeSub={{ subject_id: data.subject_id, type: type.type }} addClass={setPreset} likeType={likes[idx][i]}
                                                        onSelect={(e) =>toggleLike(e, idx, i ,{ subject_id: data.subject_id, type: type.type })} />
                                                })

                                        }
                                })
                        }
                        </div>
                </div>
        )
}

export default SearchClassList;