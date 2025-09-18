import React from 'react'
import Image from 'next/image'

export default function WhoSection() {
    return (
        <>
            <section className="py-16 md:py-32 dark:bg-transparent" id='whoSection'>
                <div className="mx-auto max-w-5xl border-t px-6">
                    <span className="text-caption -ml-6 -mt-3.5 block w-max bg-background px-6 dark:bg-gray-950">Quem somos</span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-bold sm:text-4xl">Conectando pesquisadores ao fomento</h2>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <p className='mb-3'>
                                O Fomenta é uma <span className='text-secondary'>iniciativa que une tecnologia, ciência e inovação</span> para apoiar o desenvolvimento de projetos e a conexão entre talentos. 
                                Nossa dedicação está em entregar <span className='text-secondary'>soluções úteis</span> e <span className='text-secondary'>recomendações precisas</span> para quem busca avançar na pesquisa.
                            </p>
                            <p>
                                A cada etapa, expandimos nossas possibilidades e fortalecemos nosso compromisso com a qualidade. Estar no Programa Nascer 2025 é reflexo dessa visão de futuro
                            </p>
                            <Image
                                className="h-52 w-fit -top-12 relative"
                                src="/programa-nascer.svg"
                                alt="Cnpq Logo"
                                height="100"
                                width="100"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
