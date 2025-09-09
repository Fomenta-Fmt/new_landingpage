import React from 'react'
import Image from 'next/image'

export default function WhoSection() {
    return (
        <>
            <section className="py-16 md:py-32 dark:bg-transparent">
                <div className="mx-auto max-w-5xl border-t px-6">
                    <span className="text-caption -ml-6 -mt-3.5 block w-max bg-background px-6 dark:bg-gray-950">Quem somos</span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-bold sm:text-4xl">Fomentamos projetos e pesquisas</h2>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <p className='mb-3'>Somos uma solução desenvolvida para <span className='text-secondary'>fortalecer</span> a produção científica, <span className='text-secondary'>potencializar</span> projetos e <span className='text-secondary'>conectar</span> talentos.</p>
                            <p>Buscamos crescimento constante, por isso, fazemos parte do Programa Nascer 2025</p>
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
