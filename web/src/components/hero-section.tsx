import React from "react";

export const HeroSection = () => {
  const meses = [
    "primer",
    "segundo",
    "tercer",
    "cuarto",
    "quinto",
    "sexto",
    "séptimo",
    "octavo",
    "noveno",
    "décimo",
    "onceavo",
    "doceavo",
  ];

  const actualMonth = meses[new Date().getMonth()];
  const actualYear = new Date().getFullYear();

  return (
    <section>
      <div className="container-pa">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ya estamos en el {actualMonth} mes de {actualYear}...
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl text-zinc-400">
                ¿Y qué has logrado hasta ahora?
              </span>
            </h1>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Te reto por 30 días
            </h2>
            <p className="text-xl text-zinc-400 font-bold">
              a convertirte en tu mejor versión usando nuestro método.
            </p>
            <p className="text-xl text-zinc-400 font-bold">
              A todos ellos les funcionó
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
