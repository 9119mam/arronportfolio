'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="padding-global">
        <div className="footer_component">
          <div className="footer_main">
            <Link href="/" className="footer_logo-wrap w-inline-block w--current">
              <Image 
                loading="lazy"
                src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68264fc2705c78fa72c6cd85_logo-1.svg"
                width={150}
                height={50}
                alt="focusly logo"
                className="footer_logo"
                style={{filter: 'invert(1)'}}
              />
            </Link>
            <div className="footer_links">
              <div className="footer_links-groups">
                <div className="footer_links-group">
                  <div className="footer_label-links">Navigation</div>
                  <div className="footer_links-list">
                    <a 
                      data-w-id="2fe3cebd-ac4d-f827-54fd-5ab7505407e6" 
                      href="#section-about" 
                      className="footer_link w-inline-block"
                    >
                      <div className="footer_link-text _1">About</div>
                      <div className="footer_link-text _2">About</div>
                    </a>
                    <a 
                      data-w-id="2fe3cebd-ac4d-f827-54fd-5ab7505407e6" 
                      href="#section-work" 
                      className="footer_link w-inline-block"
                    >
                      <div className="footer_link-text _1">Work</div>
                      <div className="footer_link-text _2">Work</div>
                    </a>
                    <a 
                      data-w-id="2fe3cebd-ac4d-f827-54fd-5ab7505407e6" 
                      href="#section-contact" 
                      className="footer_link w-inline-block"
                    >
                      <div className="footer_link-text _1">Contact</div>
                      <div className="footer_link-text _2">Contact</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer_social">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer_social-media-wrap w-inline-block">
                  <Image 
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cfec32fa211e12e726487_twitter.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="footer_social-media"
                  />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer_social-media-wrap w-inline-block">
                  <Image 
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682cffe73d6815e09e246308_facebook.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="footer_social-media"
                  />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer_social-media-wrap w-inline-block">
                  <Image 
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/682d002f69e811501d1e521a_instagram.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="footer_social-media"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_legal-links">
            <div id="w-node-db58fbaa-ddc4-f604-91cb-f98ae37d3e8d-e37d3e54" className="footer_legal-wrap">
              <div className="footer_legal">© 2026 Mason Marsden</div>
              <div className="footer_legal-divider"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}