'use client'

import Image from 'next/image'

export default function IntroSection() {
  return (
    <div style={{display: 'flex'}} className="intro">
      <div style={{opacity: 1}} className="intro_component">
        <div style={{
          transform: 'translate3d(1rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          opacity: 0
        }} className="intro_text _1">Photography</div>
        <div style={{
          transform: 'translate3d(1rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          opacity: 0
        }} className="intro_text _2">Retouching</div>
        <div className="intro_logo-wrap">
          <Image 
            src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68264fc2705c78fa72c6cd85_logo-1.svg"
            width={300}
            height={100}
            loading="eager"
            style={{
              transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(16deg) skew(0, 0)',
              filter: 'blur(10px) invert(1)',
              opacity: 0
            }}
            alt="focusly logo" 
            className="intro_logo"
          />
        </div>
        <div style={{
          transform: 'translate3d(-1rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          opacity: 0
        }} className="intro_text _3">Fashion</div>
        <div style={{
          transform: 'translate3d(-1rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          opacity: 0
        }} className="intro_text _4">Editorial</div>
      </div>
      <div style={{
        transform: 'translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
      }} className="intro_bg"></div>
    </div>
  )
}