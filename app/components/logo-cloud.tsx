import { InfiniteSlider } from "@/app/ui/infinite-slider"
import { ProgressiveBlur } from "@/app/ui/progressive-blur"
import Image from "next/image"

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Extraindo das melhores fontes</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={40}
                            speed={60}
                            gap={164}>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-36 w-fit dark:invert"
                                    src="./cnpq-logo-cloud.svg"
                                    alt="Cnpq Logo"
                                    height="600"
                                    width="600"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-36 w-fit dark:invert"
                                    src="./fapesc-logo-cloud.svg"
                                    alt="Cnpq Logo"
                                    height="600"
                                    width="600"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-36 w-fit dark:invert"
                                    src="./finep-logo-cloud.svg"
                                    alt="Cnpq Logo"
                                    height="600"
                                    width="600"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-36 w-fit dark:invert"
                                    src="./funarte-logo-cloud.svg"
                                    alt="Cnpq Logo"
                                    height="600"
                                    width="600"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
