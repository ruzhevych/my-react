import React from "react";
import { HomeIcon, AcademicCapIcon, UserGroupIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
    return (
        <div className="w-full bg-white shadow-md text-gray-800">
            <div className="container mx-auto flex items-center justify-between h-16 px-2">
                <nav className="flex space-x-6">
                    <a
                        href="/"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                        <HomeIcon className="h-5 w-5" />
                        <span>Home</span>
                    </a>
                    <a
                        href="/contacts"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                        <UserGroupIcon className="h-5 w-5" />
                        <span>Contacts</span>
                    </a>
                    <a
                        href="/about"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                        <AcademicCapIcon className="h-5 w-5" />
                        <span>About</span>
                    </a>
                </nav>

                <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
