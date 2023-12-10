import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'; 
import NavBar from '@/components/NavBar';
 



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
    <NavBar/>

 

    <main className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md">      
      <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Discover Your Creativity</h2>
          <p className="text-gray-700">
            Welcome to <strong className="text-blue-500">CraftStore</strong>, your one-stop destination for high-quality craft supplies. Explore our wide range of materials and tools to fuel your creativity.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        </section>

        <section className="mb-8 mx-auto flex justify-center">
          <img src="/images/art1.jpg" alt="art image" className="w-250 h-90 object-cover mb-4 rounded-md" /> 
        </section>
 
      </main> 
    
 
  </>
  )
}