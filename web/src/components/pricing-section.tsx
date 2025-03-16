import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const PricingSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="container-pa">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Product image */}
          <div className="relative">
            <Image
              src="/images/main-image.webp"
              alt="Piedra Angular Product"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl border border-zinc-800"
            />
            <div className="absolute -bottom-4 right-4 animate-pulse">
              <Image
                src="/images/animation.gif"
                alt="Animation"
                width={100}
                height={100}
                className="h-16 w-16"
              />
            </div>
          </div>

          {/* Right side - Pricing information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center md:text-left">¿Qué voy a cambiar con Piedra Angular?</h2>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-zinc-400">Precio Normal</h3>
                  <p className="text-sm">de Piedra Angular</p>
                  <div className="relative inline-block">
                    <p className="text-2xl font-bold text-zinc-400 line-through">$97 dólares</p>
                  </div>
                </div>

                <div className="text-center bg-zinc-800 rounded-lg p-4 my-4">
                  <h3 className="text-lg font-bold text-red-500">PRECIO</h3>
                  <p className="text-sm">de oferta</p>
                  <p className="text-3xl font-bold">$27 dólares</p>
                </div>

                <Button asChild className="btn-primary w-full">
                  <Link href="https://pay.hotmart.com/E98492758V?off=4qdhi7n0&checkoutMode=10">
                    ACEPTO EL RETO
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center">Que obtendrás en piedra angular?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="min-w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">21 clases en vivo</h4>
                <p className="text-zinc-400">
                  con expertos y millonarios conscientes para profundizar el método que organizara tu 2025 (invitados sorpresa)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">21 clases pregrabadas</h4>
                <p className="text-zinc-400">
                  en la plataforma de piedra angular que podrás consumir a tu ritmo
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Acceso a la comunidad</h4>
                <p className="text-zinc-400">
                  con más de 1000 personas de todo el mundo que estarán realizando el reto en simultaneo y compartiendo su proceso
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                <span className="text-red-500 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Acceso 1 año a las grabaciones</h4>
                <p className="text-zinc-400">
                  tendrás todo el material en plataforma por si no puedes estar en vivo en una sesión y lo quieres repetir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
