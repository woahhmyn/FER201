import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
//Khai báo 1 đối tượng student gồm id, name, age, avatar, grade
//in ra thông tin của h1, p và img
// function About() {
//   const student = {
//     id: "DE190596",
//     name: "Đỗ Ngọc Hoàn Mỹ",
//     yob: 2005,
//     avatar: "/images/avatar.png",
//     grade: "SE19C02"
//   };
//   console.log(student);

//   return (
//     <Container className="d-flex justify-content-center mt-4">
//     <Card style={{ width: '18rem' }} className="h-100">
//       <Card.Img variant="top" src={student.avatar} />
//       <Card.Body>
//         <Card.Title>{student.id}</Card.Title>
//         <Card.Text>
//           Name: {student.name} <br />
//           Year of Birth: {student.yob} <br />
//           Grade: {student.grade}
//         </Card.Text>
//         <Button variant="primary">View Details</Button>
//       </Card.Body>
//     </Card>
//     </Container>
//   );
// };
// export default About;


function About({ student }) {
  return (
    <Card style={{ width: '18rem' }} className="h-100">
      <Card.Img variant="top" src={student.avatar} style={{height: '200px', objectFit: 'cover'}} />
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
  );
}

export default About; 