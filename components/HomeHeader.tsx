'use client'

import Image from 'next/image'

export default function HomeHeader() {
  return (
    <section data-w-id="a5d0197b-4bad-3d7b-35c5-035e655f7008" className="section_home-header">
      <div className="home-header_blur-images">
        <Image 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cdb77ae160614a3059a2c_ezra-final.webp"
          width={1920}
          height={1080}
          loading="eager"
          style={{opacity: 1}}
          alt="A man standing in front of a blue sky."
          className="home-header_blur-img _1"
        />
        <Image 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682e42f70b4bfc926ba6af18_ezra-2-final.webp"
          width={1920}
          height={1080}
          loading="eager"
          style={{opacity: 0}}
          alt="A man standing in a field holding a camera."
          className="home-header_blur-img _2"
        />
      </div>
      <div className="home-header_sharp-imgs">
        <Image 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cdb77ae160614a3059a2c_ezra-final.webp"
          width={1920}
          height={1080}
          loading="eager"
          style={{filter: 'blur(0px)', opacity: 1}}
          alt="A man standing in front of a blue sky."
          className="home-header_sharp-img _1"
        />
        <Image 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682e42f70b4bfc926ba6af18_ezra-2-final.webp"
          width={1920}
          height={1080}
          loading="eager"
          style={{filter: 'blur(30px)', opacity: 0}}
          alt="A man standing in a field holding a camera."
          className="home-header_sharp-img _2"
        />
        <div className="home-header_frame">
          <div className="header-frame_center">
            <div className="header-frame_lines"><div className="header-frame_line"></div><div className="header-frame_line vertical"></div></div>
            <div className="header-frame_lines _2"><div className="header-frame_line"></div><div className="header-frame_line vertical"></div></div>
            <div className="header-frame_lines _3"><div className="header-frame_line vertical"></div><div className="header-frame_line"></div></div>
            <div className="header-frame_lines _4"><div className="header-frame_line vertical"></div><div className="header-frame_line"></div></div>
            <div className="header-frame_line-center"></div>
            <div className="header-frame_line-center-2"></div>
          </div>
          <div className="header-frame_labels">
            <div className="header-frame_label"><div className="dot"></div><div>Mason</div></div>
            <div className="header-frame_label hide-mobile-landscape"><div>Photographer</div></div>
          </div>
          <div className="header-frame_dot"></div>
        </div>
      </div>
      
      <div className="home-header_squares">
        <div className="home-header_square"></div>
        <div className="home-header_square _2"></div>
        <div className="home-header_square _3"></div>
        <div className="home-header_square _4"></div>
      </div>
      
      <div className="home-header_lines">
        {[...Array(8)].map((_, groupIndex) => (
          <div key={groupIndex} className="home-header_line-group">
            {[...Array(21)].map((_, lineIndex) => (
              <div 
                key={lineIndex} 
                className={`home-header_line${lineIndex === 20 ? ' main' : ''}`}
              >
                {lineIndex === 20 && (groupIndex === 2 || groupIndex === 4) && (
                  <div className="home-header_number-wrap">
                    <div className="home-header_number">{groupIndex === 2 ? '01' : '02'}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="home-header_button-wrap">
        <a 
          data-wf-button-variant="blur-light" 
          data-w-id="51c04b08-f112-dc39-7386-06d942d86096" 
          href="#section-about" 
          className="button w-variant-98e14c59-56d4-7695-3c7a-22b65b5b56e7 w-inline-block"
        >
          <div className="button_texts">
            <div className="button_text _1">Scroll</div>
            <div className="button_text _2">Scroll</div>
          </div>
          <div className="button-line_space blue-dark-36"></div>
          <div className="button-line_dot blue-dark-37">
            <div className="button_dot w-variant-98e14c59-56d4-7695-3c7a-22b65b5b56e7"></div>
            <div className="button_dot-scale w-variant-98e14c59-56d4-7695-3c7a-22b65b5b56e7"></div>
          </div>
        </a>
      </div>
    </section>
  )
}