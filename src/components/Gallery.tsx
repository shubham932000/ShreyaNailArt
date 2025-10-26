import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import nail1 from '@/assets/nail1.jpg';
import nail2 from '@/assets/nail2.jpg';
import nail3 from '@/assets/nail3.jpg';
import nail4 from '@/assets/nail4.jpg';
import nail5 from '@/assets/nail5.jpg';
import nail6 from '@/assets/nail6.jpg';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: nail1, alt: 'Elegant floral nail art' },
  { src: nail2, alt: 'French manicure with glitter' },
  { src: nail3, alt: 'Ombre gradient nails' },
  { src: nail4, alt: 'Geometric nail design' },
  { src: nail5, alt: 'Marble effect nails' },
  { src: nail6, alt: 'Abstract nail art' }
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const images = imagesRef.current;

    images.forEach((image, index) => {
      if (image) {
        gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            start: 'top bottom-=50',
            end: 'top center',
            toggleActions: 'play none none reverse',
            scrub: 1
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -5 : 5,
          duration: 1,
          ease: 'power3.out'
        });

        // Parallax effect on scroll
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          },
          y: -50,
          ease: 'none'
        });
      }
    });
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our stunning collection of nail artistry and designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={el => imagesRef.current[index] = el}
              className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
