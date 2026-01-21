import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
// import { studentData, studentList } from './data/studentData';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <StudentList />
    </div>
  );
}

export default App;
