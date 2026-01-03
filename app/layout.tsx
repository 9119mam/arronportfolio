import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mason Marsden - Photography & Photoshop Artist',
  description: 'Professional photographer and Photoshop artist specializing in fashion, editorial, commercial, and portrait photography.',
  openGraph: {
    title: 'Mason Marsden - Photography & Photoshop Artist',
    description: 'Professional photographer and Photoshop artist specializing in fashion, editorial, commercial, and portrait photography.',
    images: ['https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68333abe2a30e9d309568a0f_Open%20graph.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mason Marsden - Photography & Photoshop Artist',
    description: 'Professional photographer and Photoshop artist specializing in fashion, editorial, commercial, and portrait photography.',
  },
  icons: {
    icon: 'https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68265a5a9db481a901c415fb_favicon.png',
    apple: 'https://cdn.prod.website-files.com/68264700ea161932bdd80da7/68265a92868fa00b42b2d412_webclip.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-mod-js">
      <head>
        <link 
          href="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/css/focusly-template.webflow.shared.dc6b0d070.css" 
          rel="stylesheet" 
          type="text/css"
        />
      </head>
      <body>
        {children}
        
        {/* Webflow Scripts */}
        <script 
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
          async
        />
        <script 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.schunk.36b8fb49256177c8.js"
          async
        />
        <script 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.schunk.4d1b0d70d0d5adb5.js"
          async
        />
        <script 
          src="https://cdn.prod.website-files.com/68264700ea161932bdd80da7/js/webflow.262753a9.dc64398d9726463c.js"
          async
        />
        <script dangerouslySetInnerHTML={{__html: `
          !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
        `}} />
      </body>
    </html>
  )
}