'use client'

import Image from 'next/image'

export default function ServiceSection2() {
  return (
    <section className="section_home-service-2">
      <div className="padding-section-xsmall"></div>
      <div className="padding-global">
        <div className="home-service_component photo-left">
          <div 
            data-w-id="39186d55-16f1-ca92-3a97-a7ced626b408" 
            style={{
              transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0
            }} 
            className="home-service_img-wrap"
          >
            <Image 
              src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682e6f8f094993a2cd815de6_commercial-final.webp"
              width={2560}
              height={1707}
              loading="lazy"
              data-w-id="619b6c8e-87fa-7425-efa5-19bcea1d8e1e"
              sizes="(max-width: 2560px) 100vw, 2560px"
              alt="Two women sitting on the grass eating watermelon."
              className="home-service_img"
            />
          </div>
          <div id="w-node-_6d4cd2fc-bdd6-8c31-a648-d2b76bdbc748-bdd80e47" className="content-wrapper tablet-margin">
            <h2 
              data-w-id="6d4cd2fc-bdd6-8c31-a648-d2b76bdbc74a" 
              style={{
                transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              <span className="text-style-italic">Commercial</span> &amp; editorial
            </h2>
            <div className="content-wrap">
              <p 
                data-w-id="6d4cd2fc-bdd6-8c31-a648-d2b76bdbc751" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.<br/><br/>
                Eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
              <div 
                data-w-id="f7b5304c-bfbe-6652-8d6f-7eecedaace78" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }} 
                className="fade-in"
              >
                <a 
                  data-wf-button-variant="white" 
                  data-w-id="51c04b08-f112-dc39-7386-06d942d86096" 
                  href="#section-contact" 
                  className="button w-inline-block"
                >
                  <div className="button_texts">
                    <div className="button_text _1">Learn more</div>
                    <div className="button_text _2">Learn more</div>
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