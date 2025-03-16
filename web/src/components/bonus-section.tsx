import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const BonusSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-16">
      <div className="container-pa">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl font-bold">Esto no es solo un "Reto"</h2>
          <p className="text-lg text-zinc-300">
            Es un método de 21 pasos para definir la piedra angular que oriente tu destino empezando por tu 2025.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-red-500">¡Y ESO NO ES TODO!</h3>
            <p className="text-lg">También tendrás acceso a estos <span className="font-bold">Bonos Gratis</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card.webp"
                alt="Bonus 1"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Adopta nuevos hábitos:</h4>
              <p className="text-zinc-400">
                Es una plantilla que te va ayudar a integrar a tu vida cualquier hábito positivo en tan solo 21 días
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card.webp"
                alt="Bonus 2"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Elimina hábitos negativos</h4>
              <p className="text-zinc-400">
                Con esta plantilla vas a lograr eliminar por completo cualquier hábito que te esté afectando de forma negativa en tu día a día y reemplazarlo por uno nuevo que te empodere
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card.webp"
                alt="Bonus 3"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Rutina matutina</h4>
              <p className="text-zinc-400">
                No solo aprende a diseñar la rutina perfecta para ti, también aprende a hacerle el seguimiento diario para que al cabo del tiempo sea natural seguirla
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card2.webp"
                alt="Bonus 4"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Tu logro anual</h4>
              <p className="text-zinc-400">
                Plantéate una meta para 2025 y hazle seguimiento durante todo un año
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card2.webp"
                alt="Bonus 5"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Organización financiera</h4>
              <p className="text-zinc-400">
                Hazle seguimiento a tu dinero durante el primer Q del año y así crear la mejor etapa financiera de tu vida
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/bonus-card2.webp"
                alt="Bonus 6"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Meta a corto plazo</h4>
              <p className="text-zinc-400">
                Establece una meta para el primer mes del año para así iniciar el 2025 de la mejor forma posible
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="btn-primary text-lg">
            <Link href="https://pay.hotmart.com/E98492758V?off=4qdhi7n0&checkoutMode=10">
              QUIERO SER MI MEJOR VERSIÓN
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
