import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/userThunks';

const initialState = {
  isLoading: true,
  error: '',
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const { userId } = action.payload;
      state.users = state.users.filter((item) => item.id !== userId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.users = [];
    });
  },
});

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;