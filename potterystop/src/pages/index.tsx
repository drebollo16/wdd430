import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'; 
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';
 



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <HeaderBar/>
    <NavBar/>

 

    <main className="max-w-7xl mx-auto p-6 shadow-md">      
    <section className="mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Unleash Your Pottery Passion</h2>
  <p className="text-gray-700">
    Welcome to <strong className="text-green-500">PotteryHub</strong>, your go-to source for premium pottery supplies. Immerse yourself in the world of pottery with our curated selection of clay, tools, and equipment.
  </p>

  <h2 className="text-2xl font-bold text-gray-800">Featured Pottery Creations</h2>
</section>

<section className="mb-8 mx-auto flex justify-center">
  <img src="/images/pottery_featured.jpg" alt="pottery image" className="w-250 h-90 object-cover mb-4 rounded-md" />
</section>

 
      </main> 
      <FooterBar/>
 
  </>
  )
}