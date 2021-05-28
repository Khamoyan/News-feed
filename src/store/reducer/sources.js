import { createSlice } from '@reduxjs/toolkit';
import { getSources } from '../../API'
import { toast } from 'react-toastify';

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
            state.isloading = action.payload
        }
    },
});

export const { fetchSourcesData, setLoadingState } = slice.actions;

export const fetchSources = id => async dispatch => {
    dispatch(setLoadingState(true))
    try {
        let { data } = await getSources()
        dispatch(fetchSourcesData(data.sources))
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
        }
        dispatch(setLoadingState(false))
    }
};

export const selectCount = state => state.sources.list;

export default slice.reducer;
