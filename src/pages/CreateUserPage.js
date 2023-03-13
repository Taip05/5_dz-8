import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createNewUser = createAsyncThunk(
  'user/createNewUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  loading: false,
  error: null,
  message: null,
};
const createUserPageSlice = createSlice({
  name: 'createUserPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = 'идет загрузка';
      })
      .addCase(createNewUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = 'создан успешно';
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = 'пользователь не создан';
      });
  },
});
export default createUserPageSlice.reducer;