import React, { useState } from 'react'
import searchImg from '../../../assets/images/search.png'
import './style.scss'

function Search({
    onSearch
}) {
    const [value, setValue] = useState('')
    return (

        <div className="searchBox">

            <input
                className="searchInput"
                type="text"
                name=""
                placeholder="Search"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (value) {
                        onSearch(value)
                    }
                }}
                className="searchButton"
                href="#">
                <img src={searchImg} alt='' />
            </button>
        </div>
    );
}

export default Search;
