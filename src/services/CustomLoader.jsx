import React from 'react'
import { ThreeDots } from "react-loader-spinner";

const CustomLoader = ({
  color,
}) => {
  return (
    <div className="row m-0 d-flex justify-content-center">
      <div className="col-12 align-items-center text-center ">
        <ThreeDots
          color={color || "#797676"}
          height={50}
          width={50}
          timeout={19000} //8 secs
        />
      </div>
    </div>
  )
}

export default CustomLoader