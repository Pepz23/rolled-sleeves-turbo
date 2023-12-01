export const metadata = {
    title: 'Customer Care | Garrett Kitchens',
    openGraph: {
        title: 'Customer Care | Garrett Kitchens',
    },
}

export default function Page() {
    return (
        <>
            <section className="container px-4 mx-auto py-lg xl:px-8 lg:max-w-7xl">
                <h1 className="mb-6 text-5xl">Customer Care</h1>

                <hr className="w-20 border-b-2 border-brand-primaryHover" />

                <p className="mt-6 mb-2 text-md">
                    The business always endeavours to provide the best service. However, on rare
                    occasions there may be times where a customer may not be completely satisfied.
                </p>

                <p className="mb-2 text-md">
                    To ensure the business can put things right for you, as soon as possible after
                    the completion of the works, please inspect the work to ensure everything has
                    been carried out based on the contract terms and to the high standards the
                    business aims to achieve.
                </p>

                <p className="mb-2 text-md">
                    Please contact the business straight away with any concerns either by phone,
                    email or write to us. If writing, get proof of posting.
                </p>

                <h4 className="mt-6 mb-2 text-lg font-bold underline">
                    Business Complaint Procedure
                </h4>
                <p className="mb-2 text-md">
                    On receipt of your complaint the business aims to respond within 5 days.{' '}
                </p>

                <p className="mb-2 text-md">
                    The business will arrange a convenient date to come and view and/or remedy the
                    situation.{' '}
                </p>

                <p className="mb-2 text-md">
                    In the unlikely event the business is unable to resolve your complaint having
                    exhausted the business complaints procedure, it may be necessary to use another
                    complaint service. Where the business cannot resolve the complaint to your
                    satisfaction and/or agree to the final resolution requests confirmed to us; and
                    both parties agree a ‘deadlock’ has been reached, you can then escalate your
                    complaint.
                </p>

                <p className="mb-2 text-md">
                    The business has access to an Ombudsman service for our domestic contracts for
                    installation, service, repair and maintenance as part of the Which? Trusted
                    Traders Endorsement. If you choose to you can refer your complaint to the
                    Dispute Resolution Ombudsman. Before the Dispute Resolution Ombudsman can deal
                    with your complaint you will need to contact Which? Trusted Traders on 0117 456
                    6031 who can explain if you are eligible to use the Ombudsman’s services.
                </p>
            </section>
        </>
    )
}
