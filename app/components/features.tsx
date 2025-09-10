import { Card, CardContent, CardHeader } from '@/app/ui/card'
import { Hourglass, Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32" id='features'>
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Oportunidades que fomentam sua pesquisa</h2>
                    <p className="mt-4">Receba oportunidades de financiamento, anúncios de editais e conteúdos alinhados ao seu perfil acadêmico.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6 text-secondary"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-primary">Aumente suas chances</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary">
                                <span className='text-secondary'>Facilitamos sua jornada</span> ao conectar você com as melhores oportunidades de financiamento disponíveis.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Hourglass
                                    className="size-6 text-secondary"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-primary">Economize tempo</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary">
                                Receba uma curadoria de editais selecionados, permitindo que você <span className='text-secondary'>foque mais na sua pesquisa e menos na busca por financiamento.</span></p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6 text-secondary"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-primary">Atualização Constante</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary">
                                <span className='text-secondary'>Mantenha-se sempre informado</span> com as últimas oportunidades de financiamento, garantindo que você não perca chances relevantes para seus projetos.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
)
