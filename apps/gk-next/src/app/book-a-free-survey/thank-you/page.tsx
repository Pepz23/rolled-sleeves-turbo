import ThankYou from 'components/thank-you/ThankYou'
import { ButtonLink } from 'components/button/Button'

export default async function Page() {
    return (
        <>
            <ThankYou
                title="Thank you for booking a home survey!"
                content={
                    <>
                        <p>
                            You will shortly receive an email from us confirming your booking.
                            Should you need to change your appointment date/time or cancel your
                            booking, please follow the instructions within the email.
                        </p>
                        <p className="mt-2">
                            We look forward to joining you on your kitchen journey!
                        </p>
                    </>
                }
                cta={<ButtonLink href="/">To Homepage</ButtonLink>}
            />
        </>
    )
}
