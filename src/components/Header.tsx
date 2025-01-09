import React from 'react';
import Navbar from './NavBar.tsx';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className='container max-w-screen-2xl mx-auto p-4'>
            <Navbar />
        <h1 className='text-4xl text-sky-800 font-bold'>{title}</h1>
        </header>
    )
};

export default Header;