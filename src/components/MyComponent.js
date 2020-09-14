import React from "react";
import PropTypes from "prop-types";

const Button = ({ isHovered, isActive, label }) => {
  if (isActive) {
    return <button className="active">{label}</button>;
  }
  if (isHovered) {
    return <button className="hover">{label}</button>;
  }
  return <button>{label}</button>;
};

export default function MyComponent(props) {
  return <Button className="MyComponent" {...props} />;
}

MyComponent.propTypes = {
  /** hover State*/
  isHovered: PropTypes.bool,
  /** Event to change the task to archived */
  isActive: PropTypes.bool,
  /** Event to change the task to pinned */
  label: PropTypes.string,
};

MyComponent.defaultProps = {
  isHovered: false,
  isActive: false,
  label: "Submit",
};
