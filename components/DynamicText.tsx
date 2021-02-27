import React, { useState, useImperativeHandle, forwardRef } from "react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = newValue => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => {
    return {
      changeValue: changeValue,
    };
  });

  return <h1>{value}</h1>;
});

export default DynamicText;
