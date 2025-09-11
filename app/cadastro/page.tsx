'use client'

import { Button } from '@/app/ui/button'
import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/footer'
import Script from 'next/script'
import { FormEvent, useEffect, useState } from 'react'
import { Toaster } from '@/app/ui/sonner'
import { toast } from 'sonner'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/app/ui/select'

export const areasConhecimento = [
    { key: "Ciências Agrárias", label: "Ciências Agrárias" },
    { key: "Ciências Biológicas", label: "Ciências Biológicas"},
    { key: "Ciências da Saúde", label: "Ciências da Saúde" },
    { key: "Ciências Exatas e da Terra", label: "Ciências Exatas e da Terra" },
    { key: "Engenharias", label: "Engenharias"},
    { key: "Ciências Humanas", label: "Ciências Humanas" },
    { key: "Ciências Socias Aplicadas", label: "Ciências Socias Aplicadas" },
    { key: "Linguística, Letras e Artes", label: "Linguística, Letras e Artes" }
]

export default function Cadastro() {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [areaValue, setAreaValue] = useState('');
    const [ies, setIes] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    useEffect(() => {
        if (fname.trim() !== '' && email.trim() !== '' && areaValue.trim() !== '' && ies.trim() !== '') {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [fname, email, areaValue, ies]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const url = form.action;

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
                    toast.success('Obrigado! Seu cadastro foi efetuado com sucesso.');
                    form.reset();
                    setAreaValue('');
                    setFname('');
                    setEmail('');
                    setIes('')
                } else {
                    console.error("Mailchimp Error:", response);
                    let message = response.msg || 'Ocorreu um erro, por favor tente novamente mais tarde.';
                    if (message.includes('is already subscribed')) {
                        message = 'Este e-mail já está cadastrado. Obrigado!';
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
                        action="https://fomenta.us11.list-manage.com/subscribe/post?u=e260e90b7fa41e58731c3c83b&amp;id=428941b513&amp;f_id=00884de1f0"
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
                                <h1 className="mb-1 mt-6 text-xl font-semibold">Fomente a mudança: Cadastre-se e cresça conosco!</h1>
                                <p className="text-sm font-light">Receba editais semanalmente em nossa newsletter gratuita!</p>
                            </div>

                            <div className="mt-8 space-y-6">
                                {/* NOME */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-FNAME"
                                        className="block text-sm">
                                        Nome
                                        <span className='text-red-500 text-sm'> *</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        minLength={3}
                                        name="FNAME"
                                        id="mce-FNAME"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>

                                {/* SOBRENOME */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-LNAME"
                                        className="block text-sm">
                                        Sobrenome
                                    </Label>
                                    <Input
                                        type="text"
                                        minLength={3}
                                        name="LNAME"
                                        id="mce-LNAME"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-EMAIL"
                                        className="block text-sm">
                                        Email
                                        <span className='text-red-500 text-sm'> *</span>
                                    </Label>
                                    <Input
                                        type="email"
                                        required
                                        name="EMAIL"
                                        id="mce-EMAIL"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* ÁREA */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-AREA"
                                        className="block text-sm">
                                        Área de atuação
                                        <span className='text-red-500 text-sm'> *</span>
                                    </Label>
                                    <Select 
                                        name="AREA"
                                        onValueChange={setAreaValue} 
                                        value={areaValue}
                                        required>
                                        <SelectTrigger className='text-sm w-full border border-input flex rounded-md bg-transparent px-3 shadow-xs focus-visible:border-secondary focus-visible:ring-secondary focus-visible:ring-1'>
                                            <SelectValue placeholder="Escolha uma área" />
                                        </SelectTrigger>
                                        <SelectContent >
                                            <SelectGroup id="mce-AREA">
                                                {areasConhecimento.map((area) => (
                                                    <SelectItem key={area.key} value={area.key}>{area.label}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* INSTITUIÇÃO */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="mce-IES"
                                        className="block text-sm">
                                        Instituição de vínculo
                                        <span className='text-red-500 text-sm'> *</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        name="IES"
                                        id="mce-IES"
                                        value={ies}
                                        onChange={(e) => setIes(e.target.value)}
                                    />
                                </div>

                                <div hidden>
                                    <Input
                                        type="hidden"
                                        name="tags"
                                        value="8115385"
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
                                    disabled={isBtnDisabled}
                                >
                                    Cadastrar
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
