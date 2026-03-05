import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const FilterBar = ({ accounts, onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [role, setRole] = useState('All');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let result = [...accounts];

    // Search
    if (search) {
      result = result.filter(a => 
        a.username.toLowerCase().includes(search.toLowerCase()) || 
        a.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter Status/Role
    if (status !== 'All') result = result.filter(a => a.status === status.toLowerCase());
    if (role !== 'All') result = result.filter(a => a.role === role.toLowerCase());

    // Sorting
    if (sortBy === 'user-az') result.sort((a, b) => a.username.localeCompare(b.username));
    if (sortBy === 'user-za') result.sort((a, b) => b.username.localeCompare(a.username));
    if (sortBy === 'role') result.sort((a, b) => a.role.localeCompare(b.role));
    if (sortBy === 'status') result.sort((a, b) => a.status.localeCompare(b.status));

    onFilterChange(result);
  }, [search, status, role, sortBy, accounts]);

  return (
    <Row className="g-3 bg-light p-3 rounded shadow-sm">
      <Col md={3}><Form.Control placeholder="Search username/email..." onChange={e => setSearch(e.target.value)} /></Col>
      <Col md={2}>
        <Form.Select onChange={e => setStatus(e.target.value)}>
          <option value="All">All Status</option><option value="Active">Active</option><option value="Locked">Locked</option>
        </Form.Select>
      </Col>
      <Col md={2}>
        <Form.Select onChange={e => setRole(e.target.value)}>
          <option value="All">All Role</option><option value="Admin">Admin</option><option value="User">User</option>
        </Form.Select>
      </Col>
      <Col md={3}>
        <Form.Select onChange={e => setSortBy(e.target.value)}>
          <option value="">Sort By...</option>
          <option value="user-az">Username (A-Z)</option><option value="user-za">Username (Z-A)</option>
          <option value="role">Role</option><option value="status">Status</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FilterBar;