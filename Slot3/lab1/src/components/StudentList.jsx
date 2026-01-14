//StudentList.jsx dùng để hiển thị danh sách sinh viên, dữ liệu được lấy từ studentData.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { studentList } from '../data/studentData';
function StudentList() {
    // sử dụng map để duyệt qua studentList và hiển thị thông tin sinh viên, dữ liệu chứa trong container
    return (
        <Container className="mt-4">
            <Row>
                {studentList.map((student) => ( 
                    <Col key={student.id} md={4} className="mb-4">
                        <Card style={{ width: '18rem' }} className="h-100">
                            <Card.Img variant="top" src={student.avatar} style={{height: '200px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>{student.id}</Card.Title>
                                <Card.Text>
                                    Name: {student.name} <br />
                                    Year of Birth: {student.yob} <br />
                                    Grade: {student.grade}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>  
        </Container>
    );
}

export default StudentList;