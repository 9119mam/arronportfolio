'use client'

import Image from 'next/image'

const workItems = [
  {
    id: 1,
    name: 'Bronx',
    image: 'https://cdn.prod.website-files.com/682ce02e04a40f0fec89ebb7/682d12a7eb54c99446a02775_man-1-final.webp',
    alt: 'Bronx photography project'
  },
  {
    id: 2,
    name: 'Movve',
    image: 'https://cdn.prod.website-files.com/682ce02e04a40f0fec89ebb7/682d216e96bfe0471eba4e11_woman-final.webp',
    alt: 'Movve photography project'
  },
  {
    id: 3,
    name: 'Minimalista',
    image: 'https://cdn.prod.website-files.com/682ce02e04a40f0fec89ebb7/682ce1a51a3a520ccb35431f_Three%20Men%20Outdoors.webp',
    alt: 'Minimalista photography project'
  }
]

export default function WorkListSection() {
  return (
    <section id="section-work" className="section_work-list">
      <div className="padding-section-large"></div>
      <div className="padding-global">
        <div className="work-list_component">
          <div className="work-list_head">
            <h2 
              data-w-id="7dc38120-aa02-5ed2-ef22-bb6849ec52aa" 
              style={{
                transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }} 
              className="heading-style-h1"
            >
              <span 
                data-w-id="74647a67-d895-dddd-5181-d57c864adc51" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }} 
                className="text-style-italic"
              >
                Selected
              </span>{' '}
              <span 
                data-w-id="43744f35-d2f6-ddaf-a5a8-91ab214336e1" 
                style={{
                  transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                work
              </span>
            </h2>
            <div 
              data-w-id="2e85e448-bb7e-c3b6-2ef3-b8e207b1566d" 
              style={{
                transform: 'translate3d(null, 0.5rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }} 
              className="work-list_number"
            >
              <div>3</div>
            </div>
          </div>
          <div className="spacer-xlarge"></div>
          <div data-w-id="b54acf21-06a6-3000-01a4-555cd104c2f5" className="hover_wrap">
            <div data-w-id="b54acf21-06a6-3000-01a4-555cd104c2f6" className="hover_pill">
              <div data-w-id="b54acf21-06a6-3000-01a4-555cd104c2f7" className="hover_text-wrap">
                <div data-w-id="b54acf21-06a6-3000-01a4-555cd104c2f8" className="hover_text">View work</div>
              </div>
            </div>
          </div>
          <div className="work-list_wrapper w-dyn-list">
            <div role="list" className="work-list_list w-dyn-items">
              {workItems.map((item) => (
                <div key={item.id} role="listitem" className="work-list_item w-dyn-item">
                  <div data-w-id="07d0612c-d2c3-5c62-a1ed-b659ca677e7a" className="work-list_block">
                    <a 
                      aria-label="link to work page" 
                      data-w-id="c3aa485f-cc12-d93a-d282-f27efdbfbca1" 
                      href="#section-work" 
                      className="work-list_link w-inline-block"
                    >
                      <Image 
                        src={item.image}
                        width={800}
                        height={1000}
                        loading="eager"
                        alt={item.alt}
                        className="work-list_img"
                      />
                      <div className="work-list_name">
                        <div className="dot"></div>
                        <div>{item.name}</div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-large"></div>
    </section>
  )
}