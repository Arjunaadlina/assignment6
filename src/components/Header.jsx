import React from 'react';
import Search from './Search';

const Header = ({ title, onSearch }) => {
    return (
        <header className="bg-blue-900 text-white text-center flex items-center justify-between px-2 sm:px-6 md:px-12">
            <h1 className="md:text-2xl font-bold sm:text-xl">{title}</h1>
            <Search onSearch={onSearch}/>
        </header>
    );
};

export default Header;
