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

        <section className="mb-8 m-20">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>

  <div className="flex items-center">
    <img
      src="/images/artwinter.jpg"
      alt="Event 1"
      className="w-20 h-20 object-cover rounded-md mr-4"
    />
    <div>
      <h3 className="text-lg font-bold">Event 1: Craft Workshop</h3>
      <p className="text-gray-700">Date: January 15, 2024</p>
      <p className="text-gray-700">Location: CraftStore Workshop Space</p>
    </div>
  </div>

  <div className="flex items-center mt-4">
    <img
      src="/images/artmtns.png"
      alt="Event 2"
      className="w-20 h-20 object-cover rounded-md mr-4"
    />
    <div>
      <h3 className="text-lg font-bold">Event 2: Art Exhibition</h3>
      <p className="text-gray-700">Date: February 5, 2024</p>
      <p className="text-gray-700">Location: Art Gallery</p>
    </div>
  </div>

  {/* Add more events as needed */}
</section>
      </main> 
    
 
  </>
  )
}