import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import CTASection from 'components/cta/CTASection'
import FourStep from 'components/four-step/FourStep'
import Video from 'components/video/Video'

export const metadata = {
    title: 'Our Process | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <Hero
                className=""
                subTitle=""
                title="Our Process"
                image="/assets/home/hero/hero.png"
                description={`Check out the video below to see our process or start your journey by clicking the button below.`}
                button={
                    <ButtonLink href="/request-a-free-brochure">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                }
            />

            <Video
                title="Our Process"
                image="/assets/book-a-free-survey/Video Thumbnail.jpg"
                videoId="sZ6E7QqROFk"
                channel="youtube"
            />

            <FourStep />

            <CTASection
                className="pt-28 md:pt-28 lg:py-32"
                title="Need some design inspiration?"
                image="/assets/home/brochureImg.jpg"
                description={`With a wide variety of styles, colours, and features, our Kitchen Brochure is
                sure to inspire you with ideas for your next, unique kitchen.`}
                whiteBg
                button={<ButtonLink href="/request-a-free-brochure">Request a Brochure</ButtonLink>}
            />
        </>
    )
}
