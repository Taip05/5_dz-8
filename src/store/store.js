import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import usersReducer from "./UsersSlice"
const reducer = combineReducers( {

    usersReducer
})


export const store = configureStore({
    reducer

})