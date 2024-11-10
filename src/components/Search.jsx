import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            alert('Please enter a valid search query!');
            return;
        }

        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-row items-center justify-center my-4 md:flex-row md:justify-center">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for movies..."
                className="w-full md:w-64 lg:w-98 px-4 py-2 rounded-tl-lg rounded-bl-lg md:rounded-bl-lg  md:rounded-tl-lg  focus:outline-none text-black"
            />
            <button type="submit" className="w-12 md:w-16 bg-blue-300 px-4 py-2 rounded-br-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-white ">
                🔍  
            </button>
        </form>
    );
};

export default Search;
