import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <h1>HOME</h1>
      <nav>
        
        <Link to="/page1">교과목 검색</Link> |{" "}
        <Link to="/page2">교과목 preset</Link> |{" "}
        <Link to="/page3">수강신청 연습</Link>{" "}
      </nav>
    </div>
  );
}