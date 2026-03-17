import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',  // Tên slice → prefix cho action type
  initialState,
  reducers: {
    // Mỗi hàm = 1 case trong switch-case cũ
    // Redux Toolkit cho phép "mutate" state (nhờ Immer)

    loginStart(state) {
      state.loading = true;  // Thay: return {...state, loading:true}
      state.error = null;
    },

    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;  // payload = user object
      state.loading = false;
    },

    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;  // payload = error string
    },

    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

// createSlice TỰ ĐỘNG tạo action creators:
//   loginStart()    → { type: 'auth/loginStart' }
//   loginSuccess(u) → { type: 'auth/loginSuccess', payload: u}
export const { loginStart, loginSuccess, loginFailure,
  logout, clearError } = authSlice.actions;

// Export reducer → dùng trong configureStore
export default authSlice.reducer;