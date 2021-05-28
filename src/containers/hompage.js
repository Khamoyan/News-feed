import React, { useEffect } from 'react'
import Homepage from '../pages/home'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSources } from '../store/reducer/sources'

function HomepageContainer() {

    const { list, isloading } = useSelector((state) => state.sources)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSources())
    }, [dispatch]);
    return (
        <Homepage

            onClickFilterBySource={(id) => {
                let url = `/search?sources=${id}`
                window.location.replace(url)
            }}
            list={list}
            isloading={isloading}
        />
    );
}

export default HomepageContainer;
