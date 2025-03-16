import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FAQSection = () => {
  return (
    <section className=" py-16">
      <div className="container-pa">
        <h2 className="text-2xl font-bold text-center mb-10">
          Preguntas Frecuentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿Qué es piedra angular?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-800 pb-4">
              <p>
                Piedra Angular es un reto de 21 días diseñado para transformar
                la vida de los participantes desde su base, o "piedra angular",
                que representa el ADN y las creencias fundamentales.
              </p>
              <p className="mt-2">
                Desde el 14 de Marzo al 4 de Abril, miles de personas de todo el
                mundo se conectarán en vivo para aprender principios
                espirituales, emocionales, físicos y económicos para crear la
                vida de sus sueños.
              </p>
              <p className="mt-2">
                La serie incluye clases diarias, episodios grabados y plantillas
                exclusivas de seguimiento, diseñadas para garantizar el éxito.
                Transmisiones en vivo desde 6 países.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿Quién es Dave Duque?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-300 pb-4">
              <p>Solo soy una persona apasionada por transformar vidas.</p>
              <p className="mt-2">
                Después de enfrentar sus propios desafíos, decidí ayudar a otros
                a romper sus limitaciones y crear el futuro que siempre soñaron.
              </p>
              <p className="mt-2">
                Con años de experiencia guiando a miles de personas, ha
                descubierto que el cambio verdadero comienza desde adentro, al
                reprogramar nuestras creencias más profundas y conectar con
                nuestra esencia.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿Cómo me va a ayudar piedra angular?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-300 pb-4">
              <p>
                Piedra Angular te ayudará a transformar tu vida desde sus
                raíces, comenzando con un cambio profundo en tu forma de pensar
                y en los cimientos que has construido durante toda tu vida.
              </p>
              <p className="mt-2">
                A través de un proceso de 21 días, descubrirás cómo reprogramar
                tu mente, cambiar tus creencias limitantes y conectar con tu
                verdadero potencial.
              </p>
              <p className="mt-2">
                Este reto te guiará a través de métodos diarios, meditaciones y
                herramientas prácticas, todo basado en principios universales y
                científicos, para ayudarte a crear la vida que siempre has
                querido.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿Piedra Angular es otro curso que no haré?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-300 pb-4">
              <p>Piedra Angular no es un curso o reto tradicional.</p>
              <p className="mt-2">
                Vamos a estar en 6 países del mundo transmitiéndote principios
                de diversas civilizaciones, todo para demostrarte que si sigues
                haciendo lo mismo cada inicio de año, seguirás en el mismo
                lugar.
              </p>
              <p className="mt-2">
                Este reto está diseñado para que cortes ese ciclo y comiences
                2025 con una verdadera transformación, no solo con buenas
                intenciones.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿En cuánto tiempo veré los cambios?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-300 pb-4">
              <p>
                En Piedra Angular, los resultados pueden empezar a notarse desde
                los primeros días, porque estamos trabajando directamente con tu
                mentalidad y tus hábitos.
              </p>
              <p className="mt-2">
                Este reto está diseñado para ser transformador desde el primer
                momento, pero el verdadero cambio ocurre de forma continua
                durante los 21 días y más allá.
              </p>
              <p className="mt-2">
                Los primeros 21 días te proporcionan la base y las herramientas,
                pero si eres constante, verás cómo tu vida empieza a alinearse
                con lo que deseas.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="rounded-lg border border-zinc-700 px-4"
          >
            <AccordionTrigger className="text-left font-bold py-4">
              ¿Hay garantías?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-300 pb-4">
              <p className="font-bold">No.</p>
              <p className="mt-2">
                Los cimientos de piedra angular están comprobados y tienen
                cientos de testimonios, si entras dudando si esto es para ti,
                mejor no ingreses, vas a tener el 100% de parte de mi equipo y
                más, la decisión está en tu corazón y en qué tanto confías en
                ti.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <Button asChild className="btn-primary text-lg bg-[#9dd8e7]">
            <Link href="https://pay.hotmart.com/E98492758V?off=4qdhi7n0&checkoutMode=10">
              TENGO MÁS DUDAS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
