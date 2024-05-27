import { SearchOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

function Search() {
    const [showInput, setShowInput] = useState(false);

    const handleMouseEnter = () => {
        setShowInput(true);
    };

    const handleMouseLeave = () => {
        if (!document.activeElement.classList.contains('search-input'))
            setShowInput(false);
    };

    return (
        <div className='flex gap-3 bg-tertiary px-3 py-1 h-fit rounded-2xl' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="cursor-pointer" onClick={handleMouseEnter}>
                <SearchOutlined className="text-secondary" />
            </p>
            {showInput &&
                <input
                    className="search-input text-sm text-white bg-primary px-3.5 border-none focus:outline-none rounded-lg"
                    type="text"
                    placeholder="Search here..."
                    onFocus={handleMouseEnter}
                />
            }
        </div>
    );
}

export default Search;
