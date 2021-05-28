import React from 'react'
import './style.scss'
import FilterItem from './item'
import data from '../../utils/resourses.json'

function Filters({
    onFilterBy,
    filters
}) {

    function generateActiveFilter(filter) {
        let res = []
        if (filter) {
            res = filter.split(',')
        }
        return res
    }

    return (
        <div className='filters'>
            <FilterItem
                title='Country'
                items={data.countries}
                onFilterBy={(item, bool) => onFilterBy('country', item, bool)}
                data={generateActiveFilter(filters.country)}
            />
            <FilterItem
                title='Category'
                items={data.category}
                onFilterBy={(item, bool) => onFilterBy('category', item, bool)}
                data={generateActiveFilter(filters.category)}
            />
            <FilterItem
                title='Language'
                items={data.language}
                onFilterBy={(item, bool) => onFilterBy('language', item, bool)}
                data={generateActiveFilter(filters.language)}
            />
        </div>
    );
}

export default Filters;
