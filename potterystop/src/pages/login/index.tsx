import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'; 
import NavBar from '@/components/NavBar';
 



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <link href="/styles/global.css" rel="stylesheet"></link>
    <header className="bg-secondary p-4">
      <h1 className="text-4xl text-accent font-bold">Pottery Stop</h1>
    </header>
    <NavBar/>

 

    <main className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md">      
  
  <h2>Login Page</h2>
      </main> 
    
 
  </>
  )
}