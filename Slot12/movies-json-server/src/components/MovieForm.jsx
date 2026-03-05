 // src/components/MovieForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal, Image } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import { initialMovieState } from '../reducers/MovieReducers';

// Component con tái sử dụng cho các trường input
const MovieFields = ({ currentMovie, handleInputChange, handleFileChange, imagePreview, genres, errors = {}, validated = false }) => (
    <>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="formAvatar">
                    <Form.Label>Ảnh Avatar Phim</Form.Label>
                    <div className="alert alert-info small mb-2">
                      <strong>💡 Mẹo:</strong> Upload ảnh ≤ 2MB hoặc nhập URL ảnh từ web
                    </div>
                    <Form.Control 
                        type="file" 
                        name="avatarFile" 
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mb-2"
                    />
                    <small className="text-muted d-block mb-2">hoặc</small>
                    <Form.Control 
                    type="text" 
                    name="poster" 
                    value={currentMovie.poster || ''} 
                    onChange={handleInputChange} 
                    placeholder="Nhập URL hình ảnh (ví dụ: https://...)"
                    isInvalid={validated && errors.poster}
                    isValid={validated && !errors.poster && currentMovie.poster}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.avatar || errors.poster}
                    </Form.Control.Feedback>
                    {imagePreview && (
                        <div className="mt-2">
                            <Image src={imagePreview} alt="Preview" thumbnail style={{ maxWidth: '200px', maxHeight: '150px' }} />
                        </div>
                    )}
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formTitle">
                <Form.Label>Tên Phim <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                    type="text" 
                    name="title" 
                    value={currentMovie.title || ''} 
                    onChange={handleInputChange} 
                    placeholder="Tên phim" 
                    required 
                    isInvalid={validated && errors.title}
                    isValid={validated && !errors.title && currentMovie.title}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.title}
                </Form.Control.Feedback>
               
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={12}>
                <Form.Group controlId="formDescription">
                <Form.Label>Mô tả <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="description" 
                    value={currentMovie.description || ''} 
                    onChange={handleInputChange} 
                    placeholder="Mô tả phim" 
                    required 
                    isInvalid={validated && errors.description}
                    isValid={validated && !errors.description && currentMovie.description}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.description}
                </Form.Control.Feedback>
                
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="formGenre">
                    <Form.Label>Thể loại <span className="text-danger">*</span></Form.Label>
                    <Form.Select 
                        name="genreId" 
                        value={currentMovie.genreId || ''} 
                        onChange={handleInputChange} 
                        required
                        isInvalid={validated && errors.genreId}
                        isValid={validated && !errors.genreId && currentMovie.genreId}
                    >
                        <option value="">Chọn thể loại</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.genreId}
                    </Form.Control.Feedback>
                    
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="formDuration">
                <Form.Label>Thời lượng (phút) <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                    type="number" 
                    name="duration" 
                    value={currentMovie.duration || ''} 
                    onChange={handleInputChange} 
                    placeholder="Phút" 
                    required 
                    min="1"
                    max="600"
                    isInvalid={validated && errors.duration}
                    isValid={validated && !errors.duration && currentMovie.duration}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.duration}
                </Form.Control.Feedback>
                
                </Form.Group>
            </Col>
            <Col md={2}>
                <Form.Group controlId="formYear">
                <Form.Label>Năm <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                    type="number" 
                    name="year" 
                    value={currentMovie.year || ''} 
                    onChange={handleInputChange} 
                    placeholder="Năm" 
                    required 
                    min="1900"
                    max="2030"
                    isInvalid={validated && errors.year}
                    isValid={validated && !errors.year && currentMovie.year}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.year}
                </Form.Control.Feedback>
                
            </Form.Group>
            </Col>
            <Col md={2}>
                <Form.Group controlId="formCountry">
                <Form.Label>Quốc gia <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                    type="text" 
                    name="country" 
                    value={currentMovie.country || ''} 
                    onChange={handleInputChange} 
                    placeholder="Quốc gia" 
                    required 
                    isInvalid={validated && errors.country}
                    isValid={validated && !errors.country && currentMovie.country}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.country}
                </Form.Control.Feedback>
              
                </Form.Group>
            </Col>
        </Row>
    </>
);

const MovieForm = () => {
  const state = useMovieState();
  const { dispatch, handleCreateOrUpdate, getNextMovieId, uploadImage } = useMovieDispatch();
  const { currentMovie, isEditing, showEditModal, genres } = state;
  const [imagePreview, setImagePreview] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra kích thước file (giới hạn 2MB)
      const MAX_SIZE = 2 * 1024 * 1024; // 2MB
      if (file.size > MAX_SIZE) {
        setErrors(prev => ({ 
          ...prev, 
          avatar: `Ảnh quá lớn. Tối đa 2MB. File của bạn: ${(file.size / 1024 / 1024).toFixed(2)}MB` 
        }));
        return;
      }

      // Compress ảnh trước khi convert
      const canvas = document.createElement('canvas');
      const img = new window.Image(); // Dùng window.Image để lấy DOM Image constructor
      
      img.onload = () => {
        // Set canvas size (giảm độ phân giải nếu cần)
        let width = img.width;
        let height = img.height;
        
        // Giảm kích thước ảnh nếu quá lớn
        if (width > 800 || height > 600) {
          const ratio = Math.min(800 / width, 600 / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert với quality thấp hơn để reduce size
        const imageUrl = canvas.toDataURL('image/jpeg', 0.7); // 0.7 quality
        const sizeInKB = (imageUrl.length / 1024).toFixed(2);
        
        // Kiểm tra lại kích thước sau compress
        if (imageUrl.length > MAX_SIZE) {
          setErrors(prev => ({ 
            ...prev, 
            avatar: `Ảnh vẫn quá lớn sau nén. Hãy chọn ảnh nhỏ hơn (${sizeInKB}KB)` 
          }));
          return;
        }
        
        setImagePreview(imageUrl);
        dispatch({ type: 'UPDATE_FIELD', payload: { name: 'poster', value: imageUrl } });
        
        // Clear error
        if (errors.avatar) {
          setErrors(prev => {
            const { avatar, ...rest } = prev;
            return rest;
          });
        }
      };
      
      img.onerror = () => {
        setErrors(prev => ({ ...prev, avatar: 'File không phải ảnh hợp lệ' }));
      };
      
      const reader = new FileReader();
      reader.onload = (event) => {
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCloseEditModal = () => {
      dispatch({ type: 'CLOSE_EDIT_MODAL' });
      setImagePreview(''); // Reset preview khi đóng modal
      setValidated(false);
      setErrors({});
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!currentMovie.title?.trim()) {
      newErrors.title = 'Tên phim không được để trống';
    } else if (currentMovie.title.length < 2) {
      newErrors.title = 'Tên phim phải có ít nhất 2 ký tự';
    }
    
    if (!currentMovie.description?.trim()) {
      newErrors.description = 'Mô tả không được để trống';
    } else if (currentMovie.description.length < 10) {
      newErrors.description = 'Mô tả phải có ít nhất 10 ký tự';
    }
    
    if (!currentMovie.genreId) {
      newErrors.genreId = 'Vui lòng chọn thể loại';
    }
    
    if (!currentMovie.duration) {
      newErrors.duration = 'Thời lượng không được để trống';
    } else if (currentMovie.duration < 1 || currentMovie.duration > 600) {
      newErrors.duration = 'Thời lượng phải từ 1 đến 600 phút';
    }
    
    if (!currentMovie.year) {
      newErrors.year = 'Năm không được để trống';
    } else if (currentMovie.year < 1900 || currentMovie.year > 2030) {
      newErrors.year = 'Năm phải từ 1900 đến 2030';
    }
    
    if (!currentMovie.country?.trim()) {
      newErrors.country = 'Quốc gia không được để trống';
    }
    
    // Kiểm tra poster - chấp nhận URL hoặc Base64
    if (!currentMovie.poster?.trim()) {
      newErrors.poster = 'Vui lòng chọn ảnh hoặc nhập URL hình ảnh';
    } else if (currentMovie.poster.startsWith('data:') && currentMovie.poster.length > 3 * 1024 * 1024) {
      // Nếu là Base64 và > 3MB, báo lỗi
      newErrors.poster = 'Ảnh quá lớn! Vui lòng chọn ảnh nhỏ hơn hoặc sử dụng URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setValidated(true);
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Chuẩn hóa dữ liệu trước khi gửi đi
    const dataToSend = {
      ...currentMovie,
      duration: parseInt(currentMovie.duration || 0),
      year: parseInt(currentMovie.year || 0),
      genreId: parseInt(currentMovie.genreId || 1)
    };
    
    // Gọi hàm CRUD từ Context
    const success = await handleCreateOrUpdate(dataToSend, isEditing !== null, isEditing);
    
    // Reset form nếu thành công
    if (success) {
      if (isEditing === null) {
        // Reset form khi thêm mới thành công
        setImagePreview('');
        setValidated(false);
        setErrors({});
      } else {
        // Đóng modal khi sửa thành công
        handleCloseEditModal();
      }
    }
  };

    // Logic cho Form Thêm mới (khi isEditing là null)
  const isCreating = isEditing === null; 
  const createFormProps = {
    currentMovie: currentMovie, 
    handleInputChange: handleInputChange,
    handleFileChange: handleFileChange,
    imagePreview: imagePreview,
    genres: genres,
    errors: isCreating ? errors : {},
    validated: isCreating ? validated : false
  };

  return (
    <>
      {/* FORM THÊM MỚI (Luôn hiển thị) */}
      <Container className="p-3 mb-4 border">
        <h3 className="mb-3">📽️ Thêm Phim Mới</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <MovieFields {...createFormProps} />
            <div className="d-flex gap-2 mt-3">
                <Button variant="success" type="submit">
                ➕ Thêm Phim
                </Button>
            </div>
        </Form>
      </Container>
      
      {/* MODAL CHỈNH SỬA (Chỉ hiện khi showEditModal là true) */}
      <Modal show={showEditModal} onHide={handleCloseEditModal} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Chỉnh sửa Phim ID: {isEditing}</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Body>
                <MovieFields 
                    currentMovie={currentMovie} 
                    handleInputChange={handleInputChange}
                    handleFileChange={handleFileChange}
                    imagePreview={currentMovie.poster}
                    genres={genres}
                    errors={errors}
                    validated={validated}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>Hủy</Button>
                <Button variant="warning" type="submit">Lưu Thay Đổi</Button>
            </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default MovieForm;
