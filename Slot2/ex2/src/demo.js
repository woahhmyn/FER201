const x = 5;
console.log(`The value of x is: ${x}`);
//check x là số dương hay âm
if(x >=0){
    console.log("x is a positive number");
}else{
    console.log("x is a negative number");
}

//dùng toán tử 3 ngôi
const result = (x >= 0) ? "x is a positive number" : "x is a negative number";  
console.log(result);

//hàm greet
const greet = (name, age) => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
//gọi hàm greet
console.log(greet("Alice", 30));

//mặc định age = 18
const greet2 = (name, age = 18) => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
//gọi hàm greet2
console.log(greet2("Bob"));

// viết around function square of x (bình phương của x)
const square = (x) => {
    return x * x;
}
console.log(`Bình phương của ${x} là ${square(5)}`);
console.log(square(-3));

//viết hàm in 1 đối tượng student gồm các thuộc tính id, name, age, grade
const student = (id, name, age, grade) => {
 return `Student ID: ${id}, Name: ${name}, Age: ${age}, Grade: ${grade}`;
}       
console.log(student("1", "Alice", 20, "A"));

//cách khác
const printStudent = (student) => {
    return `Student ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
}
const student1= {id: "1", name: "John", age: 22, grade: "B"};
console.log(printStudent(student1));
printStudent(student1);

//Khai báo 1 list of students và gọi hàm printStudent cho từng student trong list
const students = [
    {id: "1", name: "Alice", age: 21, grade: "A"},
    {id: "2", name: "Bob", age: 22, grade: "B"},
    {id: "3", name: "Charlie", age: 23, grade: "C"}
];

students.forEach(student => {
    console.log(printStudent(student));
});
//cách khác
for(const student of students){
    console.log(printStudent(student));
}
//cách khác dùng map
students.map(student => console.log(printStudent(student)));
//hàm map không dùng printStudent
students.map(student => {
    console.log(`Student ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});

//sử dụng destructuring để lấy các thuộc tính của student
students.forEach(({id, name, age, grade}) => {
    console.log(`Student ID: ${id}, Name: ${name}, Age: ${age}, Grade: ${grade}`);
});
//sử dụng destructuring với map
students.map(({id, name, age, grade}) => {
    console.log(`Student ID: ${id}, Name: ${name}, Age: ${age}, Grade: ${grade}`);
});
//sử dụng destructuring trong hàm printStudent
const printStudentDestructuring = ({id, name, age, grade}) => {
    return `Student ID: ${id}, Name: ${name}, Age: ${age}, Grade: ${grade}`;
}
students.forEach(student => {
    console.log(printStudentDestructuring(student));
});
students.map(student => {
    console.log(printStudentDestructuring(student));
}); 


//Dùng rest operator để lấy phần còn lại của mảng student
const [firstStudent, ...restStudents] = students;
console.log("First Student:");
console.log(printStudentDestructuring(firstStudent));
console.log("Rest of Students:");

restStudents.forEach(student => {
    console.log(printStudentDestructuring(student));
});
restStudents.map(student => {
    console.log(printStudentDestructuring(student));
}   );
//không dùng hàm printStudentDestructuring
restStudents.forEach(({id, name, age, grade}) => {
    console.log(`Student ID: ${id}, Name: ${name}, Age: ${age}, Grade: ${grade}`);
});

//thêm 1 students mới vào restStudent dùng spread operator để cập nhật mảng students
const newStudent = {id: "11", name: "David", age: 24, grade: "D"};
const updatedStudents = [firstStudent, ...restStudents, newStudent];
console.log("Updated Students List:");
console.log(updatedStudents);