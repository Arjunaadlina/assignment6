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
        <form onSubmit={handleSearch} className="flex items-center justify-center my-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for movies..."
                className="px-4 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-lg text-white">
                Search
            </button>
        </form>
    );
};

export default Search;
