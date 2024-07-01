import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // async () => {
    //   const data = await fetch("courses.json");
    //   const courses = data.json();
    //   console.log(courses);
    // };
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.course_id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
