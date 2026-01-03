'use client'

import Image from 'next/image'

export default function EmailSection() {
  return (
    <section id="section-contact" data-w-id="0b5bf721-b9c7-7d24-1268-cad2b59586ad" className="section_email">
      <div data-w-id="0b5bf721-b9c7-7d24-1268-cad2b59586ae" className="email_component">
        <div className="email_sticky">
          <Image 
            loading="lazy"
            src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cfa859be1f53a4d60d292_camera.webp"
            width={600}
            height={800}
            alt="A man holding a camera in his lap."
            className="email_img-left"
          />
          <Image 
            loading="lazy"
            src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cfb3cf3eaa41413c5a1ce_face.webp"
            width={600}
            height={800}
            alt=""
            className="email_img-right"
          />
          <div className="email_content">
            <div className="email_text-wrap">
              <div className="email_text">hi@mason.photo</div>
              <div className="email_shadow-wrap">
                <div className="email_shadow"></div>
              </div>
              <a 
                data-w-id="0b5bf721-b9c7-7d24-1268-cad2b59586b8" 
                href="mailto:hi@mason.photo" 
                className="email_link w-inline-block"
              ></a>
              <Image 
                loading="lazy"
                src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682ced320c516ddb3f93cc53_arrow-up.svg"
                width={60}
                height={60}
                alt=""
                className="email_hover-arrow"
              />
            </div>
          </div>
          <div className="email_scroll-note">
            <div className="scroll-note">
              <div className="scroll-note_text">Scroll to reveal —</div>
              <div className="scroll-note_text">Scroll to reveal —</div>
              <div className="scroll-note_text">Scroll to reveal —</div>
            </div>
            <div className="scroll-note_gradient"></div>
          </div>
        </div>
      </div>
    </section>
  )
}