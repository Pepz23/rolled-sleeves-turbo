import Script from 'next/script'
import Image from 'next/image'
import { Montserrat, Raleway, Alegreya, Source_Serif_4 } from 'next/font/google'

import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ModalVideo from 'components/modal/ModalVideo'
import CookieBanner from 'components/cookie-banner/CookieBanner'

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
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-0H8S67J6VR"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0H8S67J6VR');`}
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
            <Script id="facebook" strategy="afterInteractive">
                {`v!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '427561258137519');
                fbq('track', 'PageView');`}
            </Script>
            <noscript>
                <Image
                    alt=""
                    height="1"
                    width="1"
                    src="https://www.facebook.com/tr?id=427561258137519&ev=PageView&noscript=1"
                />
            </noscript>
            <body id="body" className="mt-[67px] md:mt-[83px] lg:mt-[88px]">
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalVideo />
                <CookieBanner />
            </body>
        </html>
    )
}
