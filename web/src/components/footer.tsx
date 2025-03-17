import React from "react";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="  py-8 border-t border-zinc-800">
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
            <CountdownTimer />
          </div>

          <Button asChild className="btn-primary text-lg bg-[#328fa6]">
            <Link href="https://wa.me/14079859084?text=Hola%2C%20quisiera%20mas%20informacion%20acerca%20del%20reto%20masivo%20online.">
              ACEPTO EL RETO
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
