import { createSlice } from '@reduxjs/toolkit';
import { getSources, getTopHeadlines } from '../../API'

export const slice = createSlice({
    name: 'sources',
    initialState: {
        list: [],
        isloading: true
    },
    reducers: {
        fetchSourcesData: (state, action) => {
            state.list = action.payload;
            state.isloading = false
        },
        setLoadingState: (state, action) => {
            state.isloading = true
        }
    },
});

export const { fetchSourcesData, setLoadingState } = slice.actions;

export const fetchSources = id => async dispatch => {
    dispatch(setLoadingState())
    try {
        let { data } = await getSources()
        dispatch(fetchSourcesData(data.sources))
    } catch (error) {

    }
};

export const selectCount = state => state.sources.list;

export default slice.reducer;
