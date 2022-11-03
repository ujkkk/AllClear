
import React, {useState, useEffect} from "react";
import "../css/classPlan.css"


const ClassPlan =({id}) =>{

    return (
        <div className="class-plan-wrap" style={{width:"770px", position:"absolute"}}>
            <table border={1}   style={{ width:"100%"}}>
                <tbody  width={"100%"}>
                        <tr>
                            <td colSpan={4}><h4 >수업정보</h4></td>
                        </tr> 
                        <tr >
                            <td colSpan={1}>
                                <div className="print-head">과목명</div>
                                <div className="print-body">알고리즘</div>
                            </td>
                            <td colSpan={3}>
                                <div className="print-head">이수구분</div>
                                <div className="print-body">전공선택</div>
                            </td>
                        </tr>  
                        <tr >
                            <td colSpan={1}>
                                <div className="print-head">수업시간 및 강의실</div>
                                <div className="print-body">목 1시~2시/공학관 201</div>
                            </td>
                            <td colSpan={3}>
                                <div className="print-head">수강대상</div>
                                <div className="print-body">2학년</div>
                            </td>
                        </tr>  
                    <tr ><td colSpan={4}><h4>교수정보</h4></td></tr>  
                    <tr >
                        <td colSpan={1}>
                            <div className="print-head">성명</div>
                            <div className="print-body">김광섭</div>
                        </td>
                        <td colSpan={3}>
                            <div className="print-head">소속</div>
                            <div className="print-body">컴퓨터 공학부</div>
                        </td>
                    </tr>  
                    <tr >
                        <td colSpan={1}>
                            <div className="print-head">면담가능장소</div>
                            <div className="print-body">공학관 A동 300호</div>
                        </td>
                        <td colSpan={3}>
                            <div className="print-head">면담가능시간</div>
                            <div className="print-body">이메일로 문의</div>
                        </td>
                    </tr>         
                    <tr ><td colSpan={4}><h4>수업방법</h4></td></tr>  
                    <tr>
                        <td colSpan={1}>
                            <div className="print-head">1.</div>
                            <div className="print-body">강의</div>
                        </td>
                        <td colSpan={3}>
                            <div className="print-head">2.</div>
                            <div className="print-body">실헙 실습</div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan={4}><h4>성적평가</h4></td>
                    </tr>
                    <tr >
                        <td colSpan={2}>
                            <div className="print-head">출석</div>
                            <div className="print-body">10%</div>
                        </td>
                        <td colSpan={2}>
                            <div className="print-head">중간고사</div>
                            <div className="print-body">35%</div>
                        </td>
                    </tr>    
                    <tr >
                        <td colSpan={2}>
                            <div className="print-head">기말고사</div>
                            <div className="print-body">35%</div>
                        </td>
                        <td colSpan={2}>
                            <div className="print-head">과제</div>
                            <div className="print-body">20%</div>
                        </td>
                    </tr>           
                    <tr >
                        <td colSpan={2}>
                            <div className="print-head">발표</div>
                            <div className="print-body">0%</div>
                        </td>
                        <td colSpan={2}>
                            <div className="print-head">태도</div>
                            <div className="print-body">0%</div>
                        </td>
                    </tr>  

                    <tr>
                        <td colSpan={4}><h4>수업계획</h4></td>
                    </tr>   
                    <tr >
                        <td colSpan={4}>
                            <div className="print-head">교과목개요</div>
                            <div className="print-body">소프트웨어 개발 시 사용할 수 있는 고급 자료구조와 관련된 알고리즘에 대해 학습하고 이러한 이론을 C 프로그래밍 형태로 실습한다. 또한 다양한 정렬 및 탐색 알고리즘에 대해 학습한다.</div>
                        </td>
                    </tr>  
                    <tr >
                        <td colSpan={4}>
                            <div className="print-head">수업목표</div>
                            <div className="print-body">자료구조에 대한 기본적인 내용을 학습하고 우선순위큐, 그래프, 정렬, 탐색, 해싱과 관련된 자료구조 및 알고리즘에 대한 응용 문제를 이해한다</div>
                        </td>
                    </tr>  
                    <tr >
                        <td colSpan={4}>
                            <div className="print-head">선수과목</div>
                            <div className="print-body">C프로그래밍 언어</div>
                        </td>
                    </tr>  
                    <tr >
                        <td colSpan={4}>
                            <div className="print-head">주교재</div>
                            <div className="print-body">C언어로 쉽게 풀어쓴 자료구조</div>
                        </td>
                    </tr>  
    
                    <tr>
                        <td colSpan={4}><h4>주차별 수업계획</h4></td>
                    </tr>   

                </tbody>
            </table>

            <table  border={1}>
                <thead>
                    <tr>
                        <th>주차</th>
                        <th>강의주제 및 내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div className="print-head">1주</div>
                        </th>
                        <td>
                            <div className="print-body">알고리즘 개요, 트리 복습 , 우선순위 큐 복습 연습문제</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">2주</div>
                        </th>
                        <td>
                            <div className="print-body">우선순위 큐 우선순위큐 ADT 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">3주</div>
                        </th>
                        <td>
                            <div className="print-body">우선순위 큐, 호프만 트리 호프만 트리 구현, 과제 설명</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">4주</div>
                        </th>
                        <td>
                            <div className="print-body">그래프 소개, 구현 하기 그래프 생성및 삭제 함수 구현 </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">5주</div>
                        </th>
                        <td>
                            <div className="print-body"> 그래프탐색, 신장트리 탐색, 신장트리 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">6주</div>
                        </th>
                        <td>
                            <div className="print-body">최소신장트리, 최단 경로 최소신장트리구현 </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">7주</div>
                        </th>
                        <td>
                            <div className="print-body"> 최단 경로, 위상정렬 최단 경로 알로리즘 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">8주</div>
                        </th>
                        <td>
                            <div className="print-body">중간고사 </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">9주</div>
                        </th>
                        <td>
                            <div className="print-body"> 정렬(삽입, 합병 등등) 배운 정렬에 대한 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">10주</div>
                        </th>
                        <td>
                            <div className="print-body">퀵정렬, 기타 정렬 배운 정렬에 대한 구현 </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">11주</div>
                        </th>
                        <td>
                            <div className="print-body">탐색 배운 탐색에 대한 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">12주</div>
                        </th>
                        <td>
                            <div className="print-body"> 탐색, 균형 트리 탐색, 균형트리에 대한 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">13주</div>
                        </th>
                        <td>
                            <div className="print-body"> 해싱 배운 해싱 알고리즘 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">14주</div>
                        </th>
                        <td>
                            <div className="print-body"> 해싱 배운 해싱 알고리즘 구현</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="print-head">15주</div>
                        </th>
                        <td>
                            <div className="print-body"> 기말고사</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClassPlan;