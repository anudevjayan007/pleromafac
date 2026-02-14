import { useEffect, useState } from "react";

const images = [
  "/h1.jpeg",
  // "/h4.jpg",
  // "/fire-saftey.webp "
];


export default function HeroImage() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    // preload images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setPrev(index);
      setIndex(i => (i + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">

      {/* Previous image (fades out) */}
      <img
        src={images[prev]}
        className="absolute inset-0 w-full h-full object-cover
                   opacity-0 transition-opacity duration-1000"
        key={`prev-${prev}`}
      />

      {/* Current image (fades in) */}
      <img
        src={images[index]}
        className="absolute inset-0 w-full h-full object-cover
                   opacity-100 transition-opacity duration-1000"
        key={`current-${index}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
