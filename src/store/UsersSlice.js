import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info = null, {dispatch, rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(response.status === 200) {
                const users = await response.json()
                return users
            }else {
                throw `Error ${response.status}`
            }

        }
        catch (e) {
            return  rejectWithValue(e)
        }
        finally {

        }
    }
)


export const createUser = createAsyncThunk(
    'createUser',
    async function(user, {dispatch, rejectWithValue}) {
        try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })

        }
        catch (error) {

        }
    }
)


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        error: '',
        loading: false
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })

        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        builder.addCase(getUsers.pending, (state, action) => {
            state.error = ""
            state.loading = true
        })
    }

})

export default usersSlice.reducer