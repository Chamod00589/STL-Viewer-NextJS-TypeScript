import React from 'react';
import Header from '../(Coponents)/Header/page';

function AboutPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Us</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Welcome to our website! We are dedicated to providing the best service and ensuring customer satisfaction. Our team is composed of highly skilled professionals who are passionate about their work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Mission</h2>
                            <p className="text-gray-600">
                                Our mission is to deliver high-quality products and services that meet the needs of our customers. We strive to innovate and continuously improve to exceed expectations.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Vision</h2>
                            <p className="text-gray-600">
                                Our vision is to be a leader in our industry, known for our commitment to excellence and our dedication to customer satisfaction. We aim to build lasting relationships with our clients and partners.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
