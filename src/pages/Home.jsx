import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ThemeToggle from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import WorkSection from '../components/WorkSection'
import Certifications from '../components/Certifications'
import { Footer } from '../components/Footer'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // default duration
      once: false,   // allow animations on scroll up too
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div data-aos="fade-up" data-aos-duration="800"><HeroSection /></div>

        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <AboutSection />
        </div>

        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="150">
          <SkillsSection />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
          <ProjectSection />
        </div>

        <div data-aos="flip-up" data-aos-duration="1300" data-aos-delay="200">
          <WorkSection />
        </div>

        <div data-aos="slide-up" data-aos-duration="900" data-aos-delay="100">
          <Certifications />
        </div>

        <div data-aos="fade-up" data-aos-duration="800">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
