import React from "react";

const Checkbox = ({
  onChange = () => {},
  checked = "",
  name = "",
  heading = "",
}) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e, heading)}
      />
    </>
  );
};

export default Checkbox;
