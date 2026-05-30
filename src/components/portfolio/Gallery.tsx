"use client";
import SplitText from "../SplitText";

export default function Gallery() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", alt: "Hackathon 1" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop", alt: "Team meeting" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Event stage" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop", alt: "Workspace" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop", alt: "Coding night" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", alt: "Conference" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SplitText text="Hobbies & Moments" className="text-2xl md:text-3xl font-bold tracking-tight mb-10" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
