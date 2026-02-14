import { useEffect, useState } from "react";

const images = [
  "/h1.jpeg",
  "/h2.jpg",
  "/h3.jpg",
  "/h4.jpg",
  "/fire-saftey.webp "
];

export default function HeroImage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in
      }, 300);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <img
        src={images[index]}
        alt="Fire safety and accessibility consultancy"
        className={`w-full h-[420px] object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
