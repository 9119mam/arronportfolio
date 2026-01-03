import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import HomeHeader from '@/components/HomeHeader'
import AboutSection from '@/components/AboutSection'
import ServiceSection1 from '@/components/ServiceSection1'
import ServiceSection2 from '@/components/ServiceSection2'
import ServiceSection3 from '@/components/ServiceSection3'
import WorkListSection from '@/components/WorkListSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'
import WebflowScripts from '@/components/WebflowScripts'

export default function Home() {
  return (
    <>
      <WebflowScripts />
      <div className="page-wrapper">
        <Navbar />
        <IntroSection />
        <main className="main-wrapper">
          <HomeHeader />
          <AboutSection />
          <ServiceSection1 />
          <ServiceSection2 />
          <ServiceSection3 />
          <WorkListSection />
          <EmailSection />
        </main>
        <Footer />
      </div>
    </>
  )
}