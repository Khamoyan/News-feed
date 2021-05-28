import React from 'react'
import './style.scss'
function FilterItem({
    title,
    items
}) {
    return (
        <div className='filter-item'>
            <span>{title} </span>
            <div className='item-content'>
            {
                items.map((country, index) => {
                    return (
                        <div key={index} className='item'>
                            <input type='checkbox'/>
                          <span>  {country.name}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default FilterItem;
