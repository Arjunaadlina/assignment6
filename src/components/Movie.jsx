import React from 'react';

const Movie = ({ movie, index }) => {
    const columnSpanClass = index === 0 
        ? 'md:col-span-4 md:row-span-4 sm:col-span-2 sm:row-span-3 l:col-span-3 lg:col-span-3'
        : index === 1 
        ? 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2' 
        : 'md:col-span-1 sm:col-span-1';

    return (
        <div className={`bg-gray-50 ${columnSpanClass} flex flex-col overflow-hidden rounded-lg relative group`}>
            <img 
                src={movie.Poster} 
                alt={movie.Title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"/>
                <div className="z-10 p-4 flex flex-col justify-end absolute inset-0 bg-gradient-to-b from-transparent to-black">
                    <h3 className="text-lg font-medium text-white">{movie.Title}</h3>
                    <p className="text-sm text-gray-200">{movie.Year}</p>
                </div>
        </div>
    );
};

export default Movie;
