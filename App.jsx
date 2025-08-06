import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'chikni', age: 21, marks: 75 },
    { id: 2, name: 'chameli', age: 22, marks: 45 },
  ]);


  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };


  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}


export default App;
