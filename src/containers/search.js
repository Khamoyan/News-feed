import React, { useEffect } from 'react'
import SearchList from '../pages/search'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from '../store/reducer/articles'

function SearchContainer() {
    const {
        list,
        isloading,
        filters,
        // totalResults,
        isloadingNextPage
    } = useSelector((state) => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch]);

    let newfilters = filters
    function onFilterBy(key, value, bool) {
        let strArr = newfilters[key] ? newfilters[key].split(',') : []
        if (bool) {
            strArr = [...strArr, value]
        } else {
            strArr = strArr.filter(i => i !== value)
        }
        newfilters = {
            ...newfilters,
            [key]: strArr.join(',')
        }
        getData()
    }

    function onSort(value) {
        newfilters = {
            ...newfilters,
            sortBy: value
        }
        getData()
    }

    function clearFilters() {
        newfilters = {}
        getData()
    }

    function generateQuery() {
        let q = []
        Object.keys(newfilters).forEach(item => {
            if (newfilters[item]) {
                q.push(`${item}=${newfilters[item]}`)
            } else {
                q = q.filter(i => i !== `${item}=${newfilters[item]}`)
            }
        })
        return q
    }

    async function getData() {
        let q = generateQuery()
        dispatch(fetchList(q))
    };

    return (
        <SearchList
            list={list}
            isloading={isloading}
            filters={filters}
            onFilterBy={onFilterBy}
            onSort={onSort}
            isloadingNextPage={isloadingNextPage}
            clearFilters={clearFilters}
        />
    );
}

export default SearchContainer;
