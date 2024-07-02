import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
import PropTypes from "prop-types";
const Courses = ({ handleSelectButton }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] ">
      {courses.map((course) => (
        <Course
          handleSelectButton={handleSelectButton}
          key={course.course_id}
          course={course}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleSelectButton: PropTypes.func,
};
export default Courses;
