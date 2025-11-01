import React from "react";

interface propsType {
  size: number;
}
const VerticalGap = ({ size }: propsType) => {
  return <div style={{ marginTop: `${size}px` }}></div>;
};
export default VerticalGap;
