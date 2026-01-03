'use client'

import { useEffect } from 'react'

export default function WebflowScripts() {
  useEffect(() => {
    // Add Webflow touch detection
    const touchScript = document.createElement('script')
    touchScript.innerHTML = `
      !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
    `
    document.body.appendChild(touchScript)

    // Load jQuery
    const jqueryScript = document.createElement('script')
    jqueryScript.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js'
    jqueryScript.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='
    jqueryScript.crossOrigin = 'anonymous'
    document.body.appendChild(jqueryScript)

    // Load Webflow scripts after jQuery
    jqueryScript.onload = () => {
      const scripts = [
        'https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.schunk.36b8fb49256177c8.js',
        'https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.schunk.4d1b0d70d0d5adb5.js',
        'https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.262753a9.dc64398d9726463c.js'
      ]

      scripts.forEach((src) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        document.body.appendChild(script)
      })
    }

    return () => {
      // Cleanup
      document.body.removeChild(touchScript)
      document.body.removeChild(jqueryScript)
    }
  }, [])

  return null
}