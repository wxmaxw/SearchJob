import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name:"jobs",
    initialState:{
        favoriteJobs:[],
    },
    reducers:{
        addFavoriteJob: (state, action) => {
            const jobExists = state.favoriteJobs.find(job => job.id == action.payload.id);
            if(!jobExists){
                state.favoriteJobs.push(action.payload);
            }
        },
        removeFavoriteJob: (state, action) => {
            state.favoriteJobs = state.favoriteJobs.filter(job => job.id !== action.payload.id);
        },
    },
});

export const { addFavoriteJob, removeFavoriteJob } = jobsSlice.actions;
export default jobsSlice.reducer;