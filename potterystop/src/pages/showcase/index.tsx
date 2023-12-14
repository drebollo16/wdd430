import Image from 'next/image';
import React from 'react';
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';

const Showcase = () => {
  return (
    <>
      <HeaderBar />
      <NavBar />
      <main className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Pottery Showcase</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PotteryImage imageName="courtney.jpg" alt="Pottery Design 1" />
          <PotteryImage imageName="hands.jpg" alt="Pottery Design 2" />
          <PotteryImage imageName="potts.jpg" alt="Pottery Design 3" />
          {/* Add more images as needed */}
        </div>
      </main>

      <FooterBar />
    </>
  );
};

const PotteryImage = ({ imageName, alt }) => (
  <div className="relative overflow-hidden rounded-md">
    <Image
      src={`/images/${imageName}`}
      alt={alt}
      layout="responsive"
      width={600}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
);

export default Showcase;
