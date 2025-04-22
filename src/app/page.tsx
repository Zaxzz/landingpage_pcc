import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Divisi from '../components/Divisi'
import Footer from '../components/Footer'
import Galeri from '../components/Galeri'
import Kontak from '../components/Kontak'
import Tentang from '../components/Tentang'
import Clients from '../components/Client'
import Features from '../components/Feature'
import Testimoni from '../components/Testimoni'
import FooterSection from '../components/FooterSection1'
import UserTestimoni from '../components/UserTestimoni'
import BlogSection from '../components/BlogSection'
import CTA from '../components/Cta'
import Footerrr from '../components/Footerrr'

export default function Home() {
  return (
    <main>
     <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Testimoni />
      <FooterSection />
      <UserTestimoni />
      <BlogSection />
      <Kontak/>
      {/* <CTA /> */}
      <Footerrr/>
      {/* <Footer /> */}
      {/* <Divisi />
      <Galeri />
      <Tentang />

      <Kontak />
      <Footer /> */}

    </main>
  )
}
