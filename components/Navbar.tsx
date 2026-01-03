'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav data-wf-navbar-variant="base" className="navbar">
      <div className="navbar_component">
        <div className="navbar_wrap">
          <Link href="/" className="navbar_logo-wrap w-inline-block w--current">
            <Image 
              src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68264fc2705c78fa72c6cd85_logo-1.svg" 
              width={120}
              height={40}
              alt="focusly logo" 
              className="navbar_logo" 
              style={{filter: 'invert(1)'}}
            />
          </Link>
          <div data-w-id="cf8193c3-54a9-f4b4-1be1-235d677d8f1e" className="navbar_menu-actions">
            <div className="navbar_actions-text _1">Menu</div>
            <div className="navbar_actions-text _2">Close</div>
          </div>
        </div>
        <div className="navbar_links">
          <a data-w-id="865ba833-336b-2b0c-6bb6-1d5fb488e303" href="#section-about" className="navbar_link w-inline-block">
            <div className="navbar_link-text _1">About</div>
            <div className="navbar_link-text _2">About</div>
          </a>
          <a data-w-id="865ba833-336b-2b0c-6bb6-1d5fb488e303" href="#section-work" className="navbar_link w-inline-block">
            <div className="navbar_link-text _1">Work</div>
            <div className="navbar_link-text _2">Work</div>
          </a>
          <a data-w-id="865ba833-336b-2b0c-6bb6-1d5fb488e303" href="#section-services" className="navbar_link w-inline-block">
            <div className="navbar_link-text _1">Services</div>
            <div className="navbar_link-text _2">Services</div>
          </a>
          <a data-w-id="865ba833-336b-2b0c-6bb6-1d5fb488e303" href="#section-contact" className="navbar_link w-inline-block">
            <div className="navbar_link-text _1">Contact</div>
            <div className="navbar_link-text _2">Contact</div>
          </a>
        </div>
      </div>
    </nav>
  )
}