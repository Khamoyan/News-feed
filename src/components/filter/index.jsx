import React from 'react'
import './style.scss'
import FilterItem from './item'
import  data from '../../utils/resourses.json'
function Filters() {
    return (
        <div className='filters'>
            <FilterItem 
                title='Country'
                items={data.countries}
            />
            <FilterItem 
                title='Categor'
                items={data.categor}
            />
              <FilterItem 
                title='language'
                items={data.language}
            />
        </div>
    );
}

export default Filters;
