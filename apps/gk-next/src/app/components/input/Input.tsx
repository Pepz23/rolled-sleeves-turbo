'use client'

import {
    forwardRef,
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
}

const inputClasses =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6'

const labelClasses = 'block text-sm font-semibold leading-6 text-gray-900 mb-2.5'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, required, className = '', ...restProps } = props

    return (
        <>
            {label && (
                <label htmlFor={restProps?.name || restProps?.id} className={labelClasses}>
                    {label}{' '}
                    {required ? (
                        <span className="text-red-500">*</span>
                    ) : (
                        <span className="text-xs text-gray-400">- optional</span>
                    )}
                </label>
            )}
            <input ref={ref} className={twMerge(inputClasses, className)} {...restProps} />
        </>
    )
})

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    const { label, required, className = '', ...restProps } = props

    return (
        <>
            {label && (
                <label htmlFor={restProps?.name || restProps?.id} className={labelClasses}>
                    {label}{' '}
                    {required ? (
                        <span className="text-red-500">*</span>
                    ) : (
                        <span className="text-xs text-gray-400">- optional</span>
                    )}
                </label>
            )}
            <textarea ref={ref} className={twMerge(inputClasses, className)} {...restProps} />
        </>
    )
})

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const { label, required, className = '', ...restProps } = props

    return (
        <>
            {label && (
                <label htmlFor={restProps?.name || restProps?.id} className={labelClasses}>
                    {label}{' '}
                    {required ? (
                        <span className="text-red-500">*</span>
                    ) : (
                        <span className="text-xs text-gray-400">- optional</span>
                    )}
                </label>
            )}
            <select ref={ref} className={twMerge(inputClasses, className)} {...restProps} />
        </>
    )
})

Input.displayName = 'Input'
Textarea.displayName = 'Textarea'
Select.displayName = 'Select'
