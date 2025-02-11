'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 my-4 relative">
            {/* Logo */}
            <div className="navbar-logo">
                <Link href="/" aria-label="Go to Home" className="text-xl font-bold font-decaydence">
                    Logo
                </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 p-2 font-decaydence text-md">
                <li><Link href="/" className="hover:text-gray-500">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-500">About</Link></li>
                <li><Link href="/services" className="hover:text-gray-500">Services</Link></li>
                <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-16 right-0 w-3/4 bg-white shadow-md p-4 rounded-lg transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4 font-decaydence text-lg">
                    <li><Link href="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/about" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/services" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
