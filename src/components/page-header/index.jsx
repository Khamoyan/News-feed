import React from 'react'
import './style.scss'
import Search from '../../components/base/search'

function PageHeader({ onSearch }) {
    return (
        <div className='page-header'>
            <a href='/'>
                <span>News</span>
            </a>

            <Search onSearch={onSearch} />
        </div>
    );
}

export default PageHeader;
