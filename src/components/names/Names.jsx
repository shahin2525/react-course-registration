import PropTypes from "prop-types";
const Names = ({ names, index }) => {
  // console.log(names, index);
  return (
    <div className="flex gap-[10px]">
      <h1>{index + 1}</h1>
      <h1>{names}</h1>
    </div>
  );
};
Names.propTypes = {
  names: PropTypes.string,
  index: PropTypes.number,
};
export default Names;
