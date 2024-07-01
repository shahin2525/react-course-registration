import "./App.css";
import Courses from "./components/courses/Courses";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header></Header>
      <div className="md:flex justify-between gap-[24px]">
        <Courses></Courses>
        <div className="w-[312px]">
          <h1> credit and course </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
