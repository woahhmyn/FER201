import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/expenses';

// Async thunks for expenses
export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await axios.get(API_URL);
      const userId = getState().auth.user.id;
      return response.data.filter(e => e.userId === userId);
    } catch (error) {
      return rejectWithValue('Failed to fetch expenses');
    }
  }
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expenseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, expenseData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to add expense');
    }
  }
);

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async ({ id, expenseData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, expenseData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update expense');
    }
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete expense');
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch expenses
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add expense
      .addCase(addExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update expense
      .addCase(updateExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete expense
      .addCase(deleteExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = expensesSlice.actions;
export default expensesSlice.reducer;