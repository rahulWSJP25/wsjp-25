import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about-us",
            name: "About Us"
        },
        {
            path: "/gallery",
            name: "Gallery"
        },
        {
            path: "/course",
            name: "Course"
        },
        {
            path: "/contact-us",
            name: "Contact Us"
        }
    ]

    return (
        <>
            <header className="p-4">
                <nav className="container mx-auto flex items-center justify-between">
                    <div>
                        <a href="#" className="text-white text-xl font-bold flex items-center">
                            <img
                                src="https://www.wscubetech.com/images/wscube-tech-logo.svg"
                                alt="WsCube Tech Logo"
                                className="h-[70px] mr-2"
                            />
                            WsCube Tech
                        </a>
                    </div>
                    <div>
                        <ul className='flex space-x-6'>
                            {
                                links.map(
                                    (link, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink
                                                    to={link.path}
                                                    className="hover:underline"
                                                    style={
                                                        ({ isActive }) => {
                                                            return { color: isActive ? "red" : "" }
                                                        }
                                                    }
                                                >
                                                    {link.name}
                                                </NavLink>
                                            </li>
                                        );
                                    }
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
