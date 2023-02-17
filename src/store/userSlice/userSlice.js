import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";
// import fetchPosts from "../posts/postsAPI";??

const userSlice = createSlice({
    name: "users",
    initialState: {
        usersData: [],
        currentUser: null,

    },
    
    reducers: {
        toggleCurrentUser(state, { payload }) {
            const initialUser = state.usersData.find(user => (user.username === payload.login || user.email === payload.login) && user.password === payload.password)
            state.currentUser = initialUser || null
            console.log(payload);
        },
        logOut(state) {
            state.currentUser = null
        }
    },

    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                usersData: [...payload]
            }
        }
    }

})
export const selectUsers = state => state.users
export const { toggleCurrentUser, logOut } = userSlice.actions
export const usersReducer = userSlice.reducer