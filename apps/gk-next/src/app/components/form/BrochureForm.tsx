'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/button/Button'
import { Input, Select } from 'components/input/Input'

export default function BrochureForm() {
    const pdfRef = useRef(null)
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data: any) => {
        const res = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({ formName: 'Brochure Form', ...data }),
        })

        if (res) {
            reset({ email: '', firstName: '', lastName: '', heardOfUsVia: '' })

            pdfRef.current.click()
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4 md:w-4/5 lg:w-3/5"
        >
            <div>
                <Input
                    label={`What's your email address?`}
                    type="email"
                    autoComplete="email"
                    required
                    {...register('email', { required: true })}
                />
            </div>
            <div>
                <Input
                    label="First name"
                    type="text"
                    autoComplete="given-name"
                    required
                    {...register('firstName', { required: true })}
                />
            </div>
            <div>
                <Input
                    label="Last name"
                    type="text"
                    autoComplete="family-name"
                    required
                    {...register('lastName', { required: true })}
                />
            </div>
            <div>
                <Select label="Where did you hear about us?" {...register('heardOfUsVia')}>
                    <option defaultChecked value="n/a">
                        Please select...
                    </option>
                    <option value="google">Google (Search Engine)</option>
                    <option value="social-media">Social Media (Facebook, Instagram, etc)</option>
                    <option value="referral">Referral / Word of Mouth</option>
                    <option value="walk-in">Walk In / Showroom</option>
                    <option value="second-nature">Second Nature</option>
                    <option value="other">Other</option>
                </Select>
            </div>
            <div className="flex w-full mt-4">
                <Button type="submit" className="w-full">
                    Download Brochure
                </Button>
            </div>
            <a
                ref={pdfRef}
                className="hidden"
                href="/pdf/Garrett-Kitchens-Kitchen-Brochure.pdf"
                download
            />
        </form>
    )
}
