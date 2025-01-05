/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

const ContactUsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Us Page</h1>
            <p className="text-lg mb-2 text-gray-700">This is the Contact Us Page.</p>
            <p className="text-lg mb-6 text-gray-700">Please feel free to reach out to us.</p>
            <a href="/" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Go back to Homepage</a>
        </div>
    );
};

export default ContactUsPage;