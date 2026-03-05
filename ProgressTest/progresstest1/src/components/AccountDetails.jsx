import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Image, ListGroup } from 'react-bootstrap';
import api from '../services/api';

const AccountDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    api.get(`/accounts/${id}`).then(res => setAccount(res.data)).catch(err => console.error(err));
  }, [id]);

  if (!account) return <p>Loading...</p>;

  return (
    <Container className="mt-5">
      <Card className="mx-auto shadow" style={{ maxWidth: '500px' }}>
        <Card.Header className="text-center bg-primary text-white"><h3>User Details</h3></Card.Header>
        <Card.Body className="text-center">
          <Image src={account.avatar} roundedCircle className="mb-3 border" width="120" height="120" style={{ objectFit: 'cover' }} />
          <ListGroup variant="flush" className="text-start">
            <ListGroup.Item><strong>Username:</strong> {account.username}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {account.email}</ListGroup.Item>
            <ListGroup.Item><strong>Role:</strong> {account.role}</ListGroup.Item>
            <ListGroup.Item><strong>Status:</strong> {account.status}</ListGroup.Item>
          </ListGroup>
          <Button variant="secondary" className="mt-4 w-100" onClick={() => navigate('/accounts')}>Back to Lists</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AccountDetails;
