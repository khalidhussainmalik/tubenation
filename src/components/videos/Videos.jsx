import React from 'react';
import './Videos.scss'
import {AiFillEye} from 'react-icons/ai'
const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/KZehm-meGMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf-aPmgp9f-ywYN4ppq5Red1LxuA" alt="thumbnail" />
        <span>05:43</span>
      </div>
      <div className="video__title">
      Why my Resume got selected in Google | Microsoft | Amazon | How to make Resume | Software Engineers
      </div>
      <div className="video__details">
        <span>
            <AiFillEye /> 953K Views •
        </span>
        <span> 10 months ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj" alt="channel_img" />
        <p>Apna College</p>
      </div>
    </div>
  )
}

export default Videos