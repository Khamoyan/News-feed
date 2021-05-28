import React from 'react'
import PageHeader from '../components/page-header'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchSources } from '../store/reducer/sources'

function PageHeaderContainer() {

    return (
        <PageHeader
            onSearch={(q) => {
                let url = `/search?q=${q}`
                window.location.replace(url)
            }}
        />
    );
}

export default PageHeaderContainer;
