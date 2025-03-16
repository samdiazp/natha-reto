import Image from "next/image";
import React from "react";

const IMAGES = [
  {
    src: "/images/antes_despues.jpg",
    alt: "Before 1",
  },
  {
    src: "/images/antes_despues_2.jpg",
    alt: "Before 2",
  },
  {
    src: "/images/antes_despues_3.jpg",
    alt: "Before 3",
  },
  {
    src: "/images/antes_despues_4.jpg",
    alt: "Before 4",
  },
  {
    src: "/images/antes_despues_5.jpg",
    alt: "Before 5",
  },
  {
    src: "/images/antes_despues_6.jpg",
    alt: "Before 6",
  },
];
export const BeforeSection = () => {
  return (
    <section>
      <div className="container-pa">
        <h2 className="text-4xl font-bold text-center mb-14">
          RESULTADOS DE LOS RETOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {IMAGES.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
