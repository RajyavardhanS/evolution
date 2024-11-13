import React from 'react'
import './Hero.css'
import arrow_btn from "../../assets/arrow_btn.png"
import pause_icon from "../../assets/pause_icon.png"
import play_icon from "../../assets/play_icon.png"
import { useNavigate } from 'react-router-dom'

const Hero = ({heroData, heroCount,setheroCount,playStatus,setplayStatus}) => {
    const Navigate= useNavigate();
    function handleClick(){
          Navigate('/code')
    }
  return (
    <div className='Hero'>
    <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
    </div>
    <div onClick={handleClick}className="hero-explore">
        <p>Click to Start</p>
        <img src={arrow_btn} alt="arrowbtn" />
    </div>
    <div className='hero-dot-play'>
        <ul className="hero-dots">
            <li onClick={()=>setheroCount(0)} className={heroCount===0 ? "hero-dot orange" : "hero-dot"}></li>
           <li onClick={()=>setheroCount(1)}className={heroCount===1 ? "hero-dot orange" : "hero-dot"}></li>
           <li onClick={()=>setheroCount(2)} className={heroCount===2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
            <img onClick={()=>setplayStatus(!playStatus)} src={playStatus? pause_icon : play_icon}/>
            <p>See the Video</p>
        </div>
    </div>
    </div>
  )
}

export default Hero