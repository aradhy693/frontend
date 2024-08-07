'use client'
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { IconCircleCheck, IconLoader } from '@tabler/icons-react';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .matches(
            /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
            'Phone number must be in the format: 123-456-7890'
        )
        .required('Required'),
    country: Yup.string().required('Required'),
    subject: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
});

const ContactForm = () => {
    const contactForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            country: '',
            subject: '',
            message: '',
        },
        validationSchema: ContactSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
            setTimeout(() => {
                console.log(values);
                resetForm();
                setSubmitting(false);
            }, 3000);
        },
    });

    return (
        <div>
            <section>
                {/* Hero */}
                <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                        {/* Title */}
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                Connect with Us
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="max-w-3xl text-center mx-auto">
                            <p className="text-lg text-white/70">
                                Let's Make Your Travel Dreams Come True
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className="text-center">
                            <a
                                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                                href="#"
                            >
                                Contact Us
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>
                        {/* End Buttons */}
                    </div>
                </div>
                {/* End Hero */}
            </section>
            <section>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center">
                            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                                Contact Us
                            </h2>
                        </div>
                        {/* Card */}
                        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                            <form onSubmit={contactForm.handleSubmit}>
                                <div className="mb-4 sm:mb-8">
                                    <label
                                        htmlFor="full-name"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="full-name"
                                        name="name"
                                        onChange={contactForm.handleChange}
                                        onBlur={contactForm.handleBlur}
                                        value={contactForm.values.name}
                                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
                                            contactForm.touched.name && contactForm.errors.name ? 'border-red-500' : ''
                                        }`}
                                        placeholder="Full name"
                                        required
                                    />
                                    {contactForm.touched.name && contactForm.errors.name ? (
                                        <div className="text-sm text-red-500">{contactForm.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4 sm:mb-8">
                                    <label
                                        htmlFor="email-address"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email-address"
                                        name="email"
                                        onChange={contactForm.handleChange}
                                        onBlur={contactForm.handleBlur}
                                        value={contactForm.values.email}
                                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
                                            contactForm.touched.email && contactForm.errors.email ? 'border-red-500' : ''
                                        }`}
                                        placeholder="Email address"
                                        required
                                    />
                                    {contactForm.touched.email && contactForm.errors.email ? (
                                        <div className="text-sm text-red-500">{contactForm.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4 sm:mb-8">
                                    <label
                                        htmlFor="phone-number"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <select
                                            id="country-code"
                                            name="country"
                                            onChange={contactForm.handleChange}
                                            onBlur={contactForm.handleBlur}
                                            value={contactForm.values.country}
                                            className={`py-3 px-4 border-gray-200 rounded-l-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 ${
                                                contactForm.touched.country && contactForm.errors.country ? 'border-red-500' : ''
                                            }`}
                                            required
                                        >
                                            <option value="+1">+1 (USA)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+61">+61 (Australia)</option>
                                            <option value="+81">+81 (Japan)</option>
                                            <option value="+49">+49 (Germany)</option>
                                            <option value="+33">+33 (France)</option>
                                            <option value="+39">+39 (Italy)</option>
                                            <option value="+86">+86 (China)</option>
                                            <option value="+55">+55 (Brazil)</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                        <input
                                            type="tel"
                                            id="phone-number"
                                            name="phone"
                                            onChange={contactForm.handleChange}
                                            onBlur={contactForm.handleBlur}
                                            value={contactForm.values.phone}
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            className={`py-3 px-4 block w-full border-gray-200 rounded-r-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
                                                contactForm.touched.phone && contactForm.errors.phone ? 'border-red-500' : ''
                                            }`}
                                            placeholder="123-456-7890"
                                            required
                                        />
                                    </div>
                                    {contactForm.touched.phone && contactForm.errors.phone ? (
                                        <div className="text-sm text-red-500">{contactForm.errors.phone}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4 sm:mb-8">
                                    <label
                                        htmlFor="subject"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        onChange={contactForm.handleChange}
                                        onBlur={contactForm.handleBlur}
                                        value={contactForm.values.subject}
                                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
                                            contactForm.touched.subject && contactForm.errors.subject ? 'border-red-500' : ''
                                        }`}
                                        placeholder="Subject"
                                        required
                                    />
                                    {contactForm.touched.subject && contactForm.errors.subject ? (
                                        <div className="text-sm text-red-500">{contactForm.errors.subject}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            onChange={contactForm.handleChange}
                                            onBlur={contactForm.handleBlur}
                                            value={contactForm.values.message}
                                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
                                                contactForm.touched.message && contactForm.errors.message ? 'border-red-500' : ''
                                            }`}
                                            placeholder="Leave your message here..."
                                            required
                                        />
                                    </div>
                                    {contactForm.touched.message && contactForm.errors.message ? (
                                        <div className="text-sm text-red-500">{contactForm.errors.message}</div>
                                    ) : null}
                                </div>
                                <div className="mt-6 grid">
                                    <button
                                        type="submit"
                                        disabled={contactForm.isSubmitting}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        {contactForm.isSubmitting ? <IconLoader className="animate-spin" size={20} /> : <IconCircleCheck />}
                                        <span>{contactForm.isSubmitting ? 'Please wait' : 'Submit'}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Contact Form */}
            </section>
        </div>
    );
};

export default ContactForm;
