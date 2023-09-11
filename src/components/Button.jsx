import PropTypes from "prop-types";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);
Button.propTypes = {
  styles: PropTypes.string.isRequired, // Make 'styles' a required string prop
};
export default Button;
