import React from 'react'
import Spoti from "../img/spoti.jpg";

import{FaEllipsisH,FaHeadphones,FaCheck} from'react-icons/fa'
function Banner() {
  return (
    <div className='banners'>
      <img src={Spoti} alt="" className='bannerImg'/>
    <div className='content'>
      <div className='crump'>
        <p>Home</p>
        <i><FaEllipsisH/></i>
      </div>
      <div className='artist'>
        <div className='left'>
          <div className='name'>
          </div>
           
          
        </div>
        <div className='right'>
          <a href='#'>
          <i><FaCheck/></i>
          Follow</a>
        </div>
      </div>
    </div>
    <div className='bottomlayer'></div>
    </div>
  )
}

export {Banner}