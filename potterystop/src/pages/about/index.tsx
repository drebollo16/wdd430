import React from 'react';
import NavBar from '@/components/NavBar';
import { Inter } from 'next/font/google';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HeaderBar/>
      <NavBar />

      <main className="max-w-7xl mx-auto p-6 shadow-md">      

    <h2>About Pottery Stop</h2>

    <p>Welcome to Pottery Stop, your one-stop destination for unique and handcrafted pottery items. Our passion for pottery drives us to create beautiful and functional pieces that add a touch of art to your everyday life.</p>

    <p>At Pottery Stop, we work with skilled artisans who use traditional techniques to craft each piece. Our diverse collection includes vases, mugs, bowls, and more. Each item is carefully made with attention to detail, ensuring that you receive a high-quality, one-of-a-kind product.</p>

    <p>Our commitment to sustainability is reflected in our choice of materials and production methods. We strive to minimize our environmental impact and create pottery that you can feel good about owning.</p>

    <p>Explore our online store to discover the perfect pottery piece for your home or find a unique gift for a loved one. Thank you for choosing Pottery Stop, where art and functionality meet.</p>

</main>

<FooterBar/>
    </>
  );
}
