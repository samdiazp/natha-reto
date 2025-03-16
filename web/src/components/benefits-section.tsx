import React from 'react';
import Image from 'next/image';

export const BenefitsSection = () => {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="container-pa">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">ESTO ES PARA TI SI:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/benefits.webp"
              alt="Benefits"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold">Estás estancado/a y necesitas un cambio</h3>
                <p className="text-zinc-400 mt-2">
                  Piedra Angular te ayudará a tomar el control y avanzar con claridad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold">Sientes que el tiempo pasa y no avanzas en nada</h3>
                <p className="text-zinc-400 mt-2">
                  Este reto te dará el enfoque necesario para lograr lo que te propones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold">No has podido construir hábitos que te impulsen al éxito</h3>
                <p className="text-zinc-400 mt-2">
                  Aquí aprenderás a implementarlos para avanzar cada día.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold">No has podido tener una transformación integral en tu vida</h3>
                <p className="text-zinc-400 mt-2">
                  Piedra Angular te guiará a través de cada paso para lograrlo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold">Además de todas las</p>
          <h3 className="text-2xl font-bold mt-2">plantillas de hábitos que tendrás</h3>
        </div>
      </div>
    </section>
  );
};
