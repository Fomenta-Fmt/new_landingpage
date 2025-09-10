'use client'

import { Button } from '@/app/ui/button'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer/footer'
import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { Toaster } from '@/app/ui/sonner'
import { toast } from 'sonner'

export default function Indicacao() {
    useEffect(() => {
        const mcSuccessNode = document.getElementById('mce-success-response');
        const mcErrorNode = document.getElementById('mce-error-response');

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const target = mutation.target as HTMLElement;

                    if (target.style.display !== 'none') {
                        if (target.id === 'mce-success-response') {
                            toast.success('Obrigado! Sua indicação foi enviada com sucesso.');
                        } else {
                            toast.error('Ocorreu um erro. Verifique o e-mail e tente novamente.');
                        }
                        target.style.display = 'none';
                    }
                }
            }
        });

        if (mcSuccessNode && mcErrorNode) {
            observer.observe(mcSuccessNode, { attributes: true });
            observer.observe(mcErrorNode, { attributes: true });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Toaster position="top-center" />
            <section className="flex min-h-screen bg-background px-4 py-16 md:py-32 dark:bg-transparent" id="mc_embed_shell">
                <div id="mc_embed_signup" className='m-auto h-fit w-full max-w-sm overflow-hidden'>
                    <form
                        action="https://fomenta.us11.list-manage.com/subscribe/post?u=e260e90b7fa41e58731c3c83b&amp;id=428941b513&amp;f_id=008f4de1f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
                    >
                        <div id="mc_embed_signup_scroll" className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
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
                                        className="required email"
                                    />
                                </div>

                                <div hidden>
                                    <Input
                                        type="hidden"
                                        name="tags"
                                        value="8115386"
                                    />
                                </div>

                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
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
            <Script
                id="mc-validate"
                src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                strategy="lazyOnload"
            />
            <Script id="mc-inline-script" strategy="lazyOnload">
                {`
                    (function($) {
                        window.fnames = new Array();
                        window.ftypes = new Array();
                        fnames[0]='EMAIL';
                        ftypes[0]='email';
                        fnames[1]='FNAME';
                        ftypes[1]='text';
                        fnames[2]='LNAME';
                        ftypes[2]='text';
                        fnames[3]='RAMO';
                        ftypes[3]='radio';
                        fnames[4]='AREA';
                        ftypes[4]='dropdown';
                        fnames[5]='IES';
                        ftypes[5]='text';
                    }(jQuery));
                    var $mcj = jQuery.noConflict(true);
                `}
            </Script>
        </>
    )
}
