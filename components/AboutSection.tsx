'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="section-about" className="section_home-about">
      <div className="padding-section-xsmall"></div>
      <div className="padding-global">
        <div className="home-about_component">
          <div 
            data-w-id="96b031a7-329e-bc86-4330-4d66c631e1eb" 
            style={{
              transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0
            }} 
            className="home-about_img-wrap"
          >
            <Image 
              src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cd86ee39d5e65847f084a_studio-eyes.webp"
              width={2048}
              height={1365}
              loading="lazy"
              data-w-id="c268429d-5f27-8605-81dd-e10ac8e8ae7d"
              sizes="(max-width: 2048px) 100vw, 2048px"
              alt="A man holding a camera in front of a white backdrop."
              className="home-about_img"
            />
          </div>
          <div id="w-node-_72f71948-e551-9af2-f277-8f9897357bb8-bdd80e47" className="content-wrapper tablet-margin">
            <h2 
              data-w-id="bdbcb679-efb0-e795-00a5-a7612668a72c" 
              style={{
                transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              About <span className="text-style-italic">me</span>
            </h2>
            <div className="content-wrap">
              <p 
                data-w-id="0cb93a61-625e-2ea3-8463-c0b964a0352f" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.<br/><br/>
                Eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <div 
                data-w-id="9ac55add-88d5-6349-fbf1-415893960740" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }} 
                className="fade-in"
              >
                <a 
                  data-wf-button-variant="white" 
                  data-w-id="51c04b08-f112-dc39-7386-06d942d86096" 
                  href="#section-about" 
                  className="button w-inline-block"
                >
                  <div className="button_texts">
                    <div className="button_text _1">Read more</div>
                    <div className="button_text _2">Read more</div>
                  </div>
                  <div className="button-line_space blue-dark-36"></div>
                  <div className="button-line_dot blue-dark-37">
                    <div className="button_dot"></div>
                    <div className="button_dot-scale"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-xsmall"></div>
    </section>
  )
}