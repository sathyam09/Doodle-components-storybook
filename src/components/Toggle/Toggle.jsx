import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

// comment is for storybook

const ToggleButton = ({ ...props }) => {
  // const { toggle_type, isDisabled, size, checked: checkedProp } = props
  const [checked, setChecked] = useState(false);
  // const onToggle = () => setIsToggled(!isToggled)

  return (
    <div className="ToggleButton">
      <h1> Toggle Switch Button</h1>
      <div className="FullToggle">
        <label className="button-switch large">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            // disabled={isDisabled}
          />
          <span className="switch large" />
        </label>
      </div>

   
    </div>
  );
};

ToggleButton.propTypes = {
  toggle_type: PropTypes.oneOf([
    "FullToggle",
  ]),
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default ToggleButton;
