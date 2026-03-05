// src/components/MovieTable.jsx
import React, { useState } from 'react';
import {
  Table,
  Button,
  Image,
  Modal,
  Alert,
  Spinner
} from 'react-bootstrap';

import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import FilterBar from "./FilterBar";

const MovieTable = () => {

  // ===== FILTER STATES =====
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [sort, setSort] = useState("");

  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();

  const { movies, genres, loading, movieToDelete, showDeleteModal } = state;

  // ===== GENRE MAP =====
  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  // ===== FILTER + SEARCH + SORT =====
  const filteredMovies = movies
    .filter(m =>
      m.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(m =>
      genreFilter ? m.genreId === parseInt(genreFilter) : true
    )
    .sort((a, b) => {
      if (sort === "asc") return a.title.localeCompare(b.title);
      if (sort === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  // ===== HANDLERS =====
  const handleEditClick = (movie) => {
    dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
  };

  const handleDeleteClick = (movie) => {
    dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
  };

  return (
    <>
      {/* ===== FILTER BAR ===== */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        genre={genreFilter}
        setGenre={setGenreFilter}
        sort={sort}
        setSort={setSort}
        genres={genres}
      />

      {/* ===== LOADING ===== */}
      {loading && movies.length === 0 ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <Alert variant="info" className="mt-3">
            Đang tải dữ liệu phim...
          </Alert>
        </div>
      ) : (

        // ===== TABLE =====
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Tên Phim</th>
              <th>Danh mục</th>
              <th>Thời lượng (phút)</th>
              <th>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => {
                const genreName = genreMap[movie.genreId] || 'Unknown';

                return (
                  <tr key={movie.id}>
                    <td>
                      <Image
                        src={movie.poster}
                        alt={movie.title}
                        style={{
                          width: '50px',
                          height: '50px',
                          objectFit: 'cover'
                        }}
                        rounded
                      />
                    </td>

                    <td>#{movie.id}</td>

                    <td>
                      <strong>{movie.title}</strong>
                      <br />
                      <small className="text-muted">
                        ({movie.year})
                      </small>
                    </td>

                    <td>{genreName}</td>

                    <td>{movie.duration} phút</td>

                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditClick(movie)}
                        className="me-2"
                      >
                        Sửa
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(movie)}
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Không tìm thấy phim phù hợp
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {/* ===== DELETE CONFIRM MODAL ===== */}
      <Modal
        show={showDeleteModal}
        onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim
          <strong> "{movieToDelete?.title}" </strong>
          (ID: {movieToDelete?.id}) không?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}
          >
            Hủy bỏ
          </Button>

          <Button
            variant="danger"
            onClick={() => confirmDelete(movieToDelete.id)}
          >
            Xác nhận Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;