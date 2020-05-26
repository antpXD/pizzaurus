import React from "react";
import leaf1 from "../images/leaves/leaf-1.png";
import leaf2 from "../images/leaves/leaf-2.png";
// import leaf3 from "../images/leaf-3.png";
import leaf4 from "../images/leaves/leaf-4.png";

const Leaves = () => {
  return (
    <div>
      <img src={leaf1} alt="" className="leaf-1" />
      <img src={leaf2} alt="" className="leaf-2" />
      <img src={leaf2} alt="" className="leaf-3" />
      {/* <img src={leaf3} alt="" className="leaf-4" /> */}
      <img src={leaf4} alt="" className="leaf-5" />
      <img src={leaf1} alt="" className="leaf-6" />
    </div>
  );
};

export default Leaves;
