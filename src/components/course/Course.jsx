import { IoBookOutline } from "react-icons/io5";
//  TfiMoney,
import PropTypes from "prop-types";
import { TfiMoney } from "react-icons/tfi";
const Course = ({ course, handleSelectButton }) => {
  // console.log(course);
  const { course_name, course_details, credit, img, price } = course;
  return (
    <div className="w-[312px] mb-[24px]">
      <img src={img} alt="" />
      <h1 className="text-[18px] font-semibold mt-[16px] text-start mb-[12px]">
        {course_name}
      </h1>
      <p className="text-[14px] font-normal w-[280px] h-[71px] text-start mb-[16px]">
        {course_details}
      </p>
      <div className="flex justify-between w-[273px] h[24px]">
        <div>
          <div className="flex justify-between gap-[18px]">
            <button className="ml-[0px] pl-[0px]">
              <TfiMoney />
            </button>
            <p>Price : {price}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-[15px]">
            <button>
              <IoBookOutline />
              {/* <FaBeer /> */}
            </button>
            <p>
              Credit : {credit} <span>hr</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[280px] h-[40px] mt-[24px] mb-[16px] flex justify-center items-center">
        <button
          onClick={() => handleSelectButton(course)}
          className="bg-[#2F80ED] py-[9px] px-[112px] text-[18px] font-semibold rounded"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelectButton: PropTypes.func,
};

export default Course;
