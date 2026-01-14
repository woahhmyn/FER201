import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

//Khai báo 1 đối tượng student gồm id, name, age, avatar, grade
//in ra thông tin của h1, p và img

function Student({ student }) {//truyền proops
  if (!student) {
    return <h2>No student data</h2>;
  }
  return (
    <Container className="d-flex justify-content-center mt-4">
    <Card style={{ width: '18rem' }} className="h-100">
      <Card.Img variant="top" src={student.avatar} />
      <Card.Body>
        <Card.Title>{student.id}</Card.Title>
        <Card.Text>
          Name: {student.name} <br />
          Year of Birth: {student.yob} <br />
          Grade: {student.grade}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
    </Container>
  );
};
export default Student;

