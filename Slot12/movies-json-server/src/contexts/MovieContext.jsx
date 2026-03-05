// src/contexts/MovieContext.jsx
import React, { createContext, useReducer, useContext, useEffect, useCallback } from 'react';
import { movieReducer, initialMovieState } from '../reducers/MovieReducers';
import movieApi from '../api/movieAPI'; // Import Axios

// Contexts
export const MovieStateContext = createContext(initialMovieState); 
export const MovieDispatchContext = createContext(null);          

// Custom Hooks
export const useMovieState = () => useContext(MovieStateContext);
export const useMovieDispatch = () => useContext(MovieDispatchContext);

// MovieProvider Component
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialMovieState);

  // Hàm READ: Tải lại dữ liệu (Axios GET)
  const fetchMovies = useCallback(async () => {
    dispatch({ type: 'START_LOADING' });
    try {
      const response = await movieApi.get('/movies');
      dispatch({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
      console.error("Lỗi khi tải danh sách phim:", error);
      // Giữ state cũ nếu lỗi (hoặc [] nếu ban đầu chưa có)
      dispatch({ type: 'SET_MOVIES', payload: [] }); 
    }
  }, [dispatch]);

  // Hàm fetch genres từ API
  const fetchGenres = useCallback(async () => {
    try {
      const response = await movieApi.get('/genres');
      dispatch({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
      console.error("Lỗi khi tải danh sách thể loại:", error);
      dispatch({ type: 'SET_GENRES', payload: [] });
    }
  }, [dispatch]); 
  
  // Hàm DELETE: Xóa phim (Axios DELETE)
  const confirmDelete = useCallback(async (id) => {
    dispatch({ type: 'CLOSE_DELETE_MODAL' });
    dispatch({ type: 'START_LOADING' });

    try {
      await movieApi.delete(`/movies/${id}`);
      fetchMovies(); // Tải lại dữ liệu
    } catch (error) {
      console.error("Lỗi khi xóa phim:", error);
      fetchMovies(); // Reload to get current state from server
    }
  }, [fetchMovies]);

  // Hàm CREATE/UPDATE: Xử lý POST và PUT (Axios POST/PUT)
  const handleCreateOrUpdate = useCallback(async (dataToSend, isEditing, isEditingId) => {
    dispatch({ type: 'START_LOADING' });
    
    try {
      if (isEditing) {
        // UPDATE (PUT)
        await movieApi.put(`/movies/${isEditingId}`, dataToSend);
        console.log('✅ Cập nhật thành công:', isEditingId);
        alert('✅ Cập nhật phim thành công!');
      } else {
        // CREATE (POST)
        const response = await movieApi.post('/movies', dataToSend);
        console.log('✅ Thêm phim thành công:', response.data);
        alert('✅ Thêm phim thành công!');
      }
      
      dispatch({ type: 'RESET_FORM' }); 
      fetchMovies(); 
      return true;
    } catch (error) {
      console.error("❌ Lỗi thao tác CREATE/UPDATE:", error);
      
      // Parse lỗi chi tiết hơn
      let errorMsg = 'Có lỗi xảy ra. Vui lòng thử lại.';
      
      if (error.response) {
        // Server response error
        if (error.response.status === 413) {
          errorMsg = '❌ Ảnh quá lớn! Hãy chọn ảnh nhỏ hơn 2MB hoặc sử dụng URL thay vì upload.';
        } else if (error.response.status === 500) {
          errorMsg = '❌ Lỗi server (500). Ảnh có thể quá lớn. Hãy giảm kích thước ảnh hoặc dùng URL.';
        } else if (error.response.data?.message) {
          errorMsg = `❌ Lỗi: ${error.response.data.message}`;
        } else {
          errorMsg = `❌ Lỗi: ${error.response.status} ${error.response.statusText}`;
        }
      } else if (error.request) {
        errorMsg = '❌ Không thể kết nối tới server. Kiểm tra kết nối mạng.';
      } else if (error.message) {
        errorMsg = `❌ Lỗi: ${error.message}`;
      }
      
      alert(errorMsg);
      return false;
    }
  }, [fetchMovies]);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [fetchMovies, fetchGenres]);

  // Giá trị của Dispatch Context
  const dispatchValue = {
      dispatch, 
      fetchMovies,
      fetchGenres,
      confirmDelete,
      handleCreateOrUpdate 
  };

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider value={dispatchValue}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  );
};
