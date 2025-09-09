import { Target, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Solution() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Newsletter semanal de oportunidades.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Receba, <span className='text-secondary'>gratuitamente</span>, oportunidades de financiamento para projetos de pesquisa e inovação.
                        </p>
                        <p>
                            Fique por dentro de editais, bolsas, prêmios e programas nacionais que podem impulsionar sua carreira acadêmica, projeto ou organização.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Fácil</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Descubra as melhores oportunidades em um único lugar.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Target className="size-4" />
                                    <h3 className="text-sm font-medium">Assertivo</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Receba os editais alinhados a sua área de conhecimento.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div
                            aria-hidden
                            className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="relative rounded-2xl p-2">
                            <Image
                                src="/rising.svg"
                                className="hidden md:block rounded-[12px] relative left-[60%] bottom-10 rotate-20"
                                alt="Work illustrations by Storyset - storyset.com"
                                width={420}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}