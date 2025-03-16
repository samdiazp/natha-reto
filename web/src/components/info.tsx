import React from "react";
import Image from "next/image";

const INFO = [
  {
    title: "ENTRENA",
    description:
      "En vivo de Lunes a Viernes y accede a la grabación en nuestro chat, para que puedas ejercitarte a la hora que más te convenga.",
    image: "Elemento 1.png",
  },
  {
    title: "NÚTRETE",
    description:
      "Planes de alimentación diseñados por nuestra Nutri, actualizados semanalmente, llenos de recetas y lista de compras para facilitar tu vida.",
    image: "Elemento 2.png",
  },
  {
    title: "CONSULTA",
    description:
      "Grupo de chat activo donde puedes resolver tus dudas a diario con acceso directo a la Nutricionista y Entrenadora.",
    image: "Elemento 3.png",
  },
  {
    title: "CONECTA",
    description:
      "En nuestro chat encontrarás apoyo y soporte emocional con personas que están viviendo lo mismo que tú.",
    image: "Elemento 4.png",
  },
];

export const Info = () => {
  return (
    <section className="py-16">
      <div className="container-pa">
        <h2 className="text-4xl font-bold text-center mb-14">
          ¿QUÉ ES EL RETO MASIVO ONLINE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-24">
          {INFO.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-32 flex items-center justify-center mb-4">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-semibold my-4">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
