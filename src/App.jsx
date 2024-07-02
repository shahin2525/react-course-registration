import { useState } from "react";
import "./App.css";
import Courses from "./components/courses/Courses";
import Header from "./components/header/Header";

import toast from "react-hot-toast";
import Names from "./components/names/Names";

function App() {
  const [hour, setHour] = useState(20);
  const [courseNames, setCourseNames] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  // console.log(courseNames);

  const handleSelectButton = (data) => {
    const isCourseSelected = courseNames.includes(data.course_name);

    // console.log(sameCourse, data.course_name);
    if (isCourseSelected) {
      return toast.error("this course had been added");
    }
    const remainCredit = hour - data.credit;
    if (remainCredit <= 0) {
      return toast.success("credit hour is not available");
    }
    setHour(remainCredit);

    setCourseNames([...courseNames, data.course_name]);
    const remainingTotalCredit = totalCredit + data.credit;
    if (remainingTotalCredit >= 20) {
      return toast.error("no credit available");
    } else {
      setTotalCredit(remainingTotalCredit);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <Header></Header>
      <div className="md:flex justify-between gap-[24px]">
        <Courses handleSelectButton={handleSelectButton}></Courses>
        <div className="w-[312px]">
          <h1> Credit Hour Remaining {hour} hr </h1>
          <hr className="my-[16px]" />

          <div>
            <h1 className="text-[20px] font-bold mb-[21px]">Course Name</h1>
            {courseNames.map((names, idx) => (
              <Names key={idx} index={idx} names={names}></Names>
            ))}
          </div>
          <hr className="mt-[24px]" />
          <h1 className="mt-[16px] text-[16px] font-medium">
            Total-Credit: {totalCredit}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
