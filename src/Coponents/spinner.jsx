import React from "react"

function Spinner() {


  return (
    <>
      <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow  " role="status"></div>
        </div>
    </>
  )
}

export default Spinner
