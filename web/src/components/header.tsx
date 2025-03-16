import React from 'react';
import Image from 'next/image';
import { CountdownTimer } from './countdown-timer';

export const Header = () => {
  return (
    <header className="bg-zinc-900 text-white py-4 border-b border-zinc-800">
      <div className="container-pa">
        <div className="flex flex-col items-center justify-center space-y-4">
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
            <h2 className="text-xl mb-2">Esta Oferta Termina en:</h2>
            <CountdownTimer />
            <p className="text-sm mt-4 text-zinc-400">
              Las puertas se cerrarán completamente cuando el contador llegue a cero
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
