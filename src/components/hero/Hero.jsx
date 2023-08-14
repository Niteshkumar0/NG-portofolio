import React, { useState } from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import {MdOutlineDeveloperBoard} from 'react-icons/md'
import {AiFillGithub,AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import './Hero.css'
const Hero = () => {
    let [icon , setIcon] = useState(<MdOutlineDeveloperBoard/>)
    let [text] = useTypewriter({
        words:[`I'm Frontend Developer `],
        loop:{}
    })
  return (
    <div className=' hero-layout'>
        <div className='intro'>
            <div className=' self '>
                <p>Hello There, &#x1F44B;<br />I'm Nitesh Kumar</p>
            </div>
            <div className=' passion'>
               <p>{text} <Cursor/> {text?.length >= 23 ? icon :''}</p>
            </div>
            <div className='social-media-icons'>
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiOutlineTwitter/>
            </div>
        </div>
        <div className='banner-hero'>
            <div className=' banner'>
              <img src="./heroImage.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero