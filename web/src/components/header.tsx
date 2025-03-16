import React from "react";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";

export const Header = () => {
  return (
    <header className=" py-4 border-b">
      <div className="container-pa">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full max-w-xs">
            <Image
              src="/images/logo.webp"
              alt="Piedra Angular Logo"
              className="w-full"
              width={480}
              height={480}
            />
          </div>

          <div className="w-full text-center">
            <h2 className="text-xl mb-2 capitalize">EL RETO COMIENZA EN:</h2>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </header>
  );
};
