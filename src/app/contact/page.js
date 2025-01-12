/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

const ContactUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white py-6 shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <nav>
                        <Link
                            href="/"
                            className="text-white hover:text-gray-200 transition duration-300"
                        >
                            Back to Homepage
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Content */}
            <main className="flex flex-col md:flex-row container mx-auto px-4 py-8 gap-8">
                {/* Contact Form Section */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-6">
                        Have a question or concern? Fill out the form below, and we’ll get back to you as soon as possible.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Write your message here..."
                                rows="5"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Map Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Location</h2>
                    <p className="text-gray-700 mb-6">
                        Visit us at our office or reach out via phone or email.
                    </p>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509749!2d-122.41941508468114!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df1e6f8d%3A0x68951e3890f4b4b3!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1694552345678!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUsPage;
