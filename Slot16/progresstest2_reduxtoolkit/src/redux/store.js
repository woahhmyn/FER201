import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import expensesReducer from './slices/expensesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // state.auth chứa auth state
    expenses: expensesReducer, // expenses: expensesReducer => state.expenses chứa expenses state
  },
  // Tự động bao gồm:
  // - redux-thunk middleware (cho async)
  // - Redux DevTools
  // - Kiểm tra lỗi mutation + serializable
});

export default store;