import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/CounterSlice'
import postsReducer from '../Features/Posts/postsSlice'
import usersReducers from '../Features/UserList/UserSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        posts:postsReducer,
        users:usersReducers
    }
})