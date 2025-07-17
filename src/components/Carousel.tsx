'use client';

import Slider from 'react-slick';
import Image from 'next/image';

const slides = [
  { src: '/imagen1.jpeg', alt: 'Imagem 1', title: 'Soltar-se', desc: 'Desconecte-se do mundo e encontre sua paz interior.' },
  { src: '/imagem2.jpeg', alt: 'Imagem 2', title: 'Conforto para todos', desc: 'Ajude quem precisa com pequenas ações.' },
  { src: '/imagem3.jpeg', alt: 'Imagem 3', title: 'Transforme vidas', desc: 'Doe e acompanhe campanhas solidárias.' },
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
       <section className="">
       
    
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <div className="w-screen h-[90vh] relative">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative w-screen h-[90vh]">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
              priority={i === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl max-w-2xl">{slide.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </main>
    </section>
  );
}
