'use client';

import Carousel from '../components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden mt-30">
      <Carousel />
    </div>
  );
}
