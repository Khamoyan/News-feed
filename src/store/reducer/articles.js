import { createSlice } from '@reduxjs/toolkit';
import { getTopHeadlines } from '../../API'
import { toast } from 'react-toastify';


export const slice = createSlice({
    name: 'articles',
    initialState: {
        list: [],
        isloading: true,
        filters: [],
        totalResults: 30
    },
    reducers: {
        fetchListData: (state, action) => {
            state.list = action.payload.articles;
            state.isloading = false
            state.totalResults = action.payload.totalResults
            state.isloadingNextPage = false
        },
        setLoadingState: (state, action) => {
            state.isloading = action.payload
        },
        setLoadingNewState: (state, action) => {
            state.isloadingNextPage = true
        },
        setFiltes: (state, action) => {
            let newdata = {}
            action.payload.forEach(element => {
                let newValue = element.split('=')
                newdata = {
                    ...newdata,
                    [newValue[0]]: newValue[1]
                }
            });
            state.filters = newdata
        }
    },
});

export const { fetchListData, setLoadingState, setFiltes, setLoadingNewState } = slice.actions;

export const fetchList = (filter, isNew) => async dispatch => {
    if (isNew) {
        dispatch(setLoadingNewState())
    } else {
        dispatch(setLoadingState(true))
    }
    try {
        if (filter) {
            let params = typeof filter === 'string' ? filter : filter.join('&')
            window.history.replaceState(null, null, `search?${params}`);
        }
        let { data } = await getTopHeadlines(window.location.search)
        let filters = window.location.search.replace('?', '')
        let filtersArray = filters.split('&')
        dispatch(setFiltes(filtersArray))
        dispatch(fetchListData(data))
    } catch (error) {
        if (error.response) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            let filters = window.location.search.replace('?', '')
            let filtersArray = filters.split('&')
            dispatch(setFiltes(filtersArray))
        }
        dispatch(setLoadingState(false))
    }
};


export const selectCount = state => state.sources.list;

export default slice.reducer;
