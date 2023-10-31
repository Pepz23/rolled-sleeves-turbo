import Script from 'next/script'
import { Montserrat, Raleway, Alegreya, Source_Serif_4 } from 'next/font/google'

import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ModalVideo from 'components/modal/ModalVideo'
import CookieBanner from 'components/cookie-banner/CookieBanner'
import FacebookPixel from 'components/util/FacebookPixel'

export const revalidate = 60

export const metadata = {
    title: 'Unique kitchens that inspire | Luxury kitchen designers | Garrett Kitchens',
    description:
        'We are an independent kitchen studio who design, supply & install inspiring kitchens and other built in furniture. With a passion for quality, design, and craftsmanship, we are dedicated to helping you create a unique kitchen design that is perfect for your space.',
    openGraph: {
        title: 'Unique kitchens that inspire | Luxury kitchen designers | Garrett Kitchens',
        description:
            'We are an independent kitchen studio who design, supply & install inspiring kitchens and other built in furniture. With a passion for quality, design, and craftsmanship, we are dedicated to helping you create a unique kitchen design that is perfect for your space.',
        url: 'https://www.garrettkitchens.co.uk',
        siteName: 'Garrett Kitchens',
        images: [
            {
                url: 'https://www.garrettkitchens.co.uk/assets/logos/logo-new.png',
            },
        ],
        locale: 'en-GB',
        type: 'website',
    },
    icons: {
        icon: '/favicons/favicon-32x32.png',
    },
}

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

const sourceserif4 = Source_Serif_4({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--font-sourceserif4',
})

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-raleway',
})

const alegreya = Alegreya({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-alegreya',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${raleway.variable} ${alegreya.variable} ${sourceserif4.variable}`}
        >
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W3RWGWK4');`}
            </Script>
            <Script id="microsoft-analytics" strategy="afterInteractive">
                {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"142002251", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
            </Script>
            <Script id="tawk" strategy="afterInteractive">
                {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5ccc88f32846b90c57acc14b/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();`}
            </Script>
            <body id="body" className="mt-[67px] md:mt-[83px] lg:mt-[88px]">
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalVideo />
                <CookieBanner />
                <FacebookPixel />
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-W3RWGWK4"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
            </body>
        </html>
    )
}
