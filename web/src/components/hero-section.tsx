import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-black py-16">
      <div className="container-pa">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ya estamos en el tercer mes de 2025...<br/>
              <span className="text-xl sm:text-2xl md:text-3xl text-zinc-400">
                ¿y qué has logrado hasta ahora?
              </span>
            </h1>

            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Vas a descubrir la metodología de 21 días para alcanzar tus metas personales
              y profesionales sin abandonarlas al poco tiempo
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="w-full max-w-2xl mx-auto relative aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-white ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>

          <Button asChild className="btn-primary text-lg">
            <Link href="https://pay.hotmart.com/E98492758V?off=4qdhi7n0&checkoutMode=10">
              QUIERO SER MI MEJOR VERSIÓN
            </Link>
          </Button>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Te reto por 21 días</h2>
            <p className="text-xl text-zinc-300">
              a convertirte en tu mejor versión usando mis herramientas:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
