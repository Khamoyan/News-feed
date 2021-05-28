import React from 'react'
import PageHeader from '../components/page-header'
import { useSelector } from 'react-redux'

function PageHeaderContainer() {
    const {
        filters,
    } = useSelector((state) => state.articles)
    return (
        <PageHeader
            onSearch={(q) => {
                let url = `/search?q=${q}`
                window.location.replace(url)
            }}
            searchValue={filters.q}
        />
    );
}

export default PageHeaderContainer;
