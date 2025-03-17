import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQS = [
  {
    question: "¿Cuanto dura el Reto Masivo Online?",
    answer: "Tiene una duración de treinta días.",
  },
  {
    question: "¿Hay límites de edad para participar?",
    answer: "No, si tu meta es recuperar tu salud este es el lugar correcto",
  },
  {
    question: "¿Cuál es el enfoque del programa?",
    answer:
      "Recuperar tu salud, bajar de peso y ganar masa muscular al mismo tiempo.",
  },
  {
    question: "¿Quienes no pueden participar?",
    answer:
      "Embarazadas, mujeres con menos de seis meses de haber dado a luz. Cualquier persona a la que su doctor le prohibiera actividades físicas de alta exigencia.",
  },
];
export const FAQSection = () => {
  return (
    <section>
      <div className="container-pa">
        <h2 className="text-2xl font-bold text-center mb-10">
          Preguntas Frecuentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="rounded-lg border border-zinc-700 px-4"
            >
              <AccordionTrigger className="text-left font-bold py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-800 pb-4">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Button asChild className="btn-primary text-lg bg-[#328fa6]">
            <Link href="https://wa.me/14079859084?text=Hola%2C%20quisiera%20mas%20informacion%20acerca%20del%20reto%20masivo%20online.">
              TENGO MÁS DUDAS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
