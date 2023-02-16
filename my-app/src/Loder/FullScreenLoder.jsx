import React from 'react';
// import Loder from "../../Assets/Img/loading-loader.svg";
// import Loder from "../../Assets/Img/TestLoder.gif";
import "./FullScreenLoder.css"

function FullScreenLoder() {
  return (
    <div>
        {/* <div className="ProcecingDiv">
          <div className="Center_Div">
            <img className='LoderSize' src={Loder} alt="" />
          </div>
        </div> */}
        <div class="loading">Loading&#8230;</div>

        <div class="content"><h3>stuff goes in here!</h3></div>
    </div>
  )
}

export default FullScreenLoder