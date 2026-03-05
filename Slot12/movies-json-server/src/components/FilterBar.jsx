import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FilterBar = ({
  search,
  setSearch,
  genre,
  setGenre,
  sort,
  setSort,
  genres
}) => {
  return (
    <Row className="mb-3">
      <Col md={4}>
        <Form.Control
          placeholder="Tìm theo tên phim"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>

      <Col md={3}>
        <Form.Select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Tất cả thể loại</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </Form.Select>
      </Col>

      <Col md={3}>
        <Form.Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sắp xếp</option>
          <option value="asc">Tên A → Z</option>
          <option value="desc">Tên Z → A</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FilterBar;