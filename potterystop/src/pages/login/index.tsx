import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'; 
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';
 



const inter = Inter({ subsets: ['latin'] })

export default function login() {
  return (
    <>
      
    <HeaderBar/>
     <NavBar/>
    <main className="max-w-7xl mx-auto p-6 shadow-md">      
      <h2>Login Page</h2>
        </main> 
    
 <FooterBar/>
  </>
  )
}