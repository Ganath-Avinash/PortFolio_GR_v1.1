"use client";
import SplitText from "../SplitText";
import CircularGallery from "./CircularGallery";

export default function Gallery() {
  const photos = [
    { src: "/imgs/hobbies/q1.jpg", alt: "Hobby 1" },
    { src: "/imgs/hobbies/q2.jpg", alt: "Hobby 2" },
    { src: "/imgs/hobbies/q3.jpg", alt: "Hobby 3" },
    { src: "/imgs/hobbies/q4.jpg", alt: "Hobby 4" },
    { src: "/imgs/hobbies/q5.jpg", alt: "Hobby 5" },
    { src: "/imgs/hobbies/q6.jpg", alt: "Hobby 6" },
  ];

  const galleryItems = photos.map(photo => ({ image: photo.src, text: "" }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SplitText text="Hobbies & Moments" className="text-2xl md:text-3xl font-bold tracking-tight mb-10" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
      
      <div style={{ height: '400px', position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '1rem' }} className="max-w-5xl mx-auto bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <CircularGallery 
          items={galleryItems}
          bend={1} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
}
