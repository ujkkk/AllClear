import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import SubjectList from "./components/subjectList";

export default function App() {
  return (
    <div>
      <h1>HOME</h1>
      <nav>
        
        <Link to="/page1">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link> |{" "}
        <Link to="/page3">Page3</Link>
      </nav>
    </div>
  );
}