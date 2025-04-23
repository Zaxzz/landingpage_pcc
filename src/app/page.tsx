import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Kontak from '../components/Kontak'

import Divisi from '../components/Divisi'
import AboutUs from '../components/AboutUs'
import Visi from '../components/Visi'
import Misi from '../components/Misi'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Struktur from '../components/Struktur'

export default function Home() {
  return (
    <main>
     <Navbar />
      <Hero />
      <Divisi />
      <AboutUs />
      <Visi />
      <Misi />
      <Struktur/>
      <Event />
      <Kontak/>
      <Footer/> 
    </main>
  )
}
