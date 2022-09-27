import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1,name:'Nabeel'},
    {id:2,name:'Vijay'},
    {id:3,name:'Rahul'}
]


export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUser=(state)=> state.users;

export default userSlice.reducer