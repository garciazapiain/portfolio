import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { Button } from '@/components/Button'
import Iframe from 'react-iframe'
import Link from 'next/link'

export default function Contact() {
    return (
        <>
            <SimpleLayout
                title="Contact"
            >
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">My email is juangarciazapiain@gmail.com, you can also contact me via <Link target="_blank" href='https://www.linkedin.com/in/juan-garcia-zapiain-532235b9/'>LinkedIn</Link>, or with form below. Looking forward to hearing from you!</p>
                <div className='mt-6'>
                    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdZUdW9BC2KGG54vrdglMLMNG80FAzU_SkoEPEO2R2OgLu-Wg/viewform?embedded=true"
                        width="640px"
                        height="600px"
                        id=""
                        className=""
                        display="block"
                        position="relative" />
                </div>
            </SimpleLayout >
        </>
    )
}
