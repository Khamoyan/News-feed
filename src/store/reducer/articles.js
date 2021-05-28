import { createSlice } from '@reduxjs/toolkit';
import { getTopHeadlines, getCountres } from '../../API'

export const slice = createSlice({
    name: 'articles',
    initialState: {
        list: [],
        isloading: true
    },
    reducers: {
        fetchListData: (state, action) => {
            state.list = action.payload;
            state.isloading=false
        },
        setLoadingState: (state, action) => {
            state.isloading = true
        }
    },
});

export const { fetchListData, setLoadingState } = slice.actions;

export const fetchList = data => async dispatch => {
    dispatch(setLoadingState())
    try {
        let { data } = await getTopHeadlines(window.location.search)
        await getCountres()
        dispatch(fetchListData(data.articles))
    } catch (error) {

    }
};

export const selectCount = state => state.sources.list;

export default slice.reducer;
