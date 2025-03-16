import React from 'react';
import Image from 'next/image';
import { CountdownTimer } from './countdown-timer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-800">
      <div className="container-pa">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-full max-w-xs">
            <Image
              src="/images/logo.webp"
              alt="Piedra Angular Logo"
              width={200}
              height={60}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full text-center">
            <h2 className="text-xl mb-2">Esta Oferta Termina HOY, quedan solo</h2>
            <CountdownTimer />
          </div>

          <p className="text-center text-zinc-400 max-w-2xl">
            Para dar inicio al RETO de PIEDRA ANGULAR
          </p>

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Ya estamos en el tercer mes de 2025</h3>
            <p className="text-xl text-zinc-300">y qué has logrado hasta ahora?</p>
          </div>

          <Button asChild className="btn-primary text-lg">
            <Link href="https://pay.hotmart.com/E98492758V?off=4qdhi7n0&checkoutMode=10">
              QUIERO SER MI MEJOR VERSIÓN
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
