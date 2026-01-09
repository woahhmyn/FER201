//duyệt qua danh sách student trong listOfStudent, import About.jsx vào và dùng hàm map để hiển thị lên grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import students from '../listOfStudent';
import About from './About';

function StudentList() {
  return (
    <Container className="mt-4">
      <Row>
        {students.map((student) => (
          <Col key={student.id} md={4} className="mb-4">
            <About student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default StudentList;
