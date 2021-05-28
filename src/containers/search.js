import React, { useEffect } from 'react'
import SearchList from '../pages/search'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from '../store/reducer/articles'

function SearchContainer() {
    const { list, isloading } = useSelector((state) => state.articles)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchList())
    }, [])


    return (
        <SearchList
            list={list}
            isloading={isloading}
        />
    );
}

export default SearchContainer;
