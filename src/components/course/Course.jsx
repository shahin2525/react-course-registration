const Course = ({ course }) => {
  console.log(course);
  const { course_name, course_details, credit, img, price } = course;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Course;
