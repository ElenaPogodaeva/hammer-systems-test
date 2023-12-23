import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../services/UserService';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      return response;
    } catch (err) {
      return rejectWithValue((err).message);
    }
  }
);