//Khai báo 1 đối tượng student gồm id, name, age, avatar, grade
//in ra thông tin của h1, p và img
function About() {
  const student = {
    id: "DE190596",
    name: "Đỗ Ngọc Hoàn Mỹ",
    age: 20,
    avatar: "/images/avatar.png",
    grade: "SE19C02"
  };

  return (
    <div>
      <h1>This is the About Student</h1>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <img src={student.avatar} alt="avatar" width="150" />
    </div>
  );
};

export default About;

