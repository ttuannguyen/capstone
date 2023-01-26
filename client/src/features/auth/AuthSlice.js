import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const loginAsync = createAsyncThunk('auth/fetchLogin', () => {
//     // return a promise containing the data we want 
//     return fetch('/login')
//     .then(res => res.json)
//     .then(data => data) 
//     // the returned response automatically becomes payload
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        status: 'idle'
    },
    reducers: {
        setLoggedInState: state => {state.loggedIn = true},
        setLoggedOutState: state => {state.loggedIn = false}
    },
 
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(loginAsync.pending, (state) => {
    //         state.status = 'loading'
    //     })
    //     .addCase(loginAsync.fulfilled, (state, action) => {
    //         state.data = action.payload
    //         state.status = 'fulfilled'
    //     })
    //     .addCase(loginAsync.rejected, (state) => {
    //         state.status = 'rejected'
    //     })
    // }
})


export default authSlice.reducer
export const {setLoggedInState, setLoggedOutState} = authSlice.actions