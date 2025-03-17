import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <section>
      <div className="container-pa">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Right side - Pricing information */}
          <div className="space-y-6">
            <div className=" bg-black rounded-lg p-6 border border-zinc-800">
              <div className="space-y-1">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-zinc-500">
                    Precio Normal
                  </h3>
                  <div className="relative inline-block">
                    <p className="text-2xl font-bold text-zinc-400 line-through font-montserrat">
                      $50
                    </p>
                  </div>
                </div>
                <div className="text-center  rounded-lg p-4 my-4">
                  <h3 className="text-4xl font-bold text-white">OFERTA</h3>
                  <p className="text-8xl font-bold text-white font-montserrat">
                    $35{" "}
                  </p>
                </div>

                <Button asChild className="btn-primary w-full bg-zinc-500">
                  <Link href="https://wa.me/14079859084?text=Hola%2C%20quisiera%20mas%20informacion%20acerca%20del%20reto%20masivo%20online.">
                    ACEPTO EL RETO
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
