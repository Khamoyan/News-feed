import React from 'react'
import './style.scss'
function FilterItem({
    title,
    items,
    onFilterBy,
    data
}) {
    return (
        <div className='filter-item'>
            <span>{title} </span>
            <div className='item-content'>
                {
                    items.map((item, index) => {
                        let exist = data.includes(item.code)
                        return (
                            <div key={index} className='item'>
                                <input
                                    type='checkbox'
                                    onChange={() => {
                                        onFilterBy(item.code, !exist)
                                    }}
                                    checked={exist}
                                />
                                <span>
                                    {item.name}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FilterItem;
