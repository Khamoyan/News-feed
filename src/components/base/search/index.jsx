import React, { useState, useEffect, createRef } from 'react'
import searchImg from '../../../assets/images/search.png'
import './style.scss'

function Search({
    onSearch,
    searchValue
}) {
    const [value, setValue] = useState(searchValue)
    let ref = createRef()
    useEffect(() => {
        if (searchValue && ref && ref.current) {
            ref.current.value = searchValue
        }
    }, [searchValue, ref])
    return (

        <div className="searchBox">

            <input
                ref={ref}
                className="searchInput"
                type="text"
                name=""
                placeholder="Search..."
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.keyCode === 13 && value) {
                        onSearch(value)
                    }
                }}
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
