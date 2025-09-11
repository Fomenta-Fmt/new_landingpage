'use client'

import { Button } from '@/app/ui/button'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer/footer'
import Script from 'next/script'
import { FormEvent } from 'react'
import { Toaster } from '@/app/ui/sonner'
import { toast } from 'sonner'

export default function Indicacao() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        // const url = form.action.replace('/post?', '/post-json?');
        const url = form.action

        
        const jQuery = (window as any).jQuery;

        if (!jQuery) {
            toast.error('Ocorreu um erro. Por favor, recarregue a página e tente novamente.');
            return;
        }

        jQuery.ajax({
            url: url,
            data: jQuery(form).serialize(),
            dataType: 'jsonp',
            jsonp: 'c',
            success: (response: any) => {
                if (response.result === 'success') {
                    toast.success('Obrigado! Sua indicação foi enviada com sucesso.');
                    form.reset();
                } else {
                    console.error("Mailchimp Error:", response);
                    let message = response.msg || 'Ocorreu um erro, por favor tente novamente mais tarde.';
                    if (message.includes('is already subscribed')) {
                        message = 'Este e-mail já foi indicado. Obrigado!';
                    } else if (message.includes('invalid email') || message.includes('Please enter a valid email address')) {
                        message = 'O e-mail fornecido é inválido. Por favor, verifique.';
                    } else if (response.result === 'error') {
                        message = 'Ocorreu um erro. Verifique os dados e tente novamente.';
                    }
                    toast.error(message);
                }
            }
        });
    };

    return (
        <>
            <Toaster position="top-center" />
            <section className="flex min-h-screen bg-background px-4 py-16 md:py-32 dark:bg-transparent">
                <div className='m-auto h-fit w-full max-w-sm overflow-hidden'>
                    <form
                        action="https://fomenta.us11.list-manage.com/subscribe/post?u=e260e90b7fa41e58731c3c83b&amp;id=428941b513&amp;f_id=008f4de1f0"
                        method="post"
                        onSubmit={handleSubmit}
                        className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
                    >
                        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
                            <div>
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Image
                                        src="/logo_azul.svg"
                                        width={110}
                                        height={110}
                                        alt="Logo da empresa Fomenta"
                                    />
                                </Link>
                                <h1 className="mb-1 mt-6 text-xl font-semibold">Ajude-nos a crescer</h1>
                                <p className="text-sm font-light">Indique e facilite a jornada de quem você confia</p>
                            </div>

                            <div className="mt-8 space-y-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-EMAIL"
                                        className="block text-sm">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        required
                                        name="EMAIL"
                                        id="mce-EMAIL"
                                        placeholder="name@example.com"
                                    />
                                </div>

                                <div hidden>
                                    <Input
                                        type="hidden"
                                        name="tags"
                                        value="8115386"
                                    />
                                </div>

                                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                    <Input
                                        type="text"
                                        name="b_e260e90b7fa41e58731c3c83b_428941b513"
                                        tabIndex={-1}
                                        defaultValue="" />
                                </div>

                                <Button
                                    id='mc-embedded-subscribe'
                                    type='submit'
                                    name='subscribe'
                                    className="w-full text-md cursor-pointer"
                                >
                                    Indicar
                                </Button>
                            </div>
                        </div>

                        <div className="p-3">
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
            <Script
                src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
                strategy="afterInteractive"
            />
        </>
    )
}