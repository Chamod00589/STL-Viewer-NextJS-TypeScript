"use client"
import React from 'react';
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter()
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                </div>
                <nav className="space-x-6">
                    <a onClick={() => { router.push("/"); }} className="text-gray-600 hover:text-gray-800">
                        Home
                    </a>
                    <a onClick={() => { router.push("/About"); }} className="text-gray-600 hover:text-gray-800">
                        About
                    </a>
                    <a href="/services" className="text-gray-600 hover:text-gray-800">
                        Services
                    </a>
                    <a href="/contact" className="text-gray-600 hover:text-gray-800">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

