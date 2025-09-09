import React from 'react';
import { AnimatedGroup } from '@/app/ui/animated-group';

export default function HowTo() {
  const steps = [
    {
      id: 1,
      title: 'Clique em se cadastrar',
      description: 'Para começar, basta clicar no botão de cadastro em nossa página.',
    },
    {
      id: 2,
      title: 'Complete o formulário',
      description: 'Preencha um formulário simples para entendermos seu perfil.',
    },
    {
      id: 3,
      title: 'Receba a curadoria',
      description: 'Pronto! Você passará a receber os editais diretamente em seu e-mail.',
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Como funciona?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Em apenas três passos simples você começa a receber oportunidades sob medida para sua pesquisa.
          </p>
        </div>

        <div className="mt-16">
          <AnimatedGroup preset="blur-slide" as="ol" className="flex flex-col items-center gap-y-8 md:flex-row md:justify-between md:items-start md:gap-x-8">
            {steps.map((step, index) => (
              <li key={step.id} className="flex flex-1 flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="flex flex-col items-center md:flex-row md:items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center text-4xl md:text-6xl font-light text-secondary pt-4">
                    {step.id}
                  </div>
                  <div className="mt-4 md:ml-6 md:mt-0">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mt-8 h-px w-20 bg-secondary/25 dark:bg-gray-700 md:ml-8 md:mt-5 md:h-20 md:w-px"
                  />
                )}
              </li>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
