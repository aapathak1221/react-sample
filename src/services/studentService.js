import { httpController } from './httpController';

const API_URL = 'http://localhost:8080/my-app/students'; // Replace with your actual API endpoint

export const registerStudent = async (studentData) => {
    return await httpController.post('/students', studentData); // Use the HTTP controller
  };
  
  export const fetchStudents = async () => {
    return await httpController.get('/students'); // Use the HTTP controller
  };

  export const updateStudent = async (studentId, studentData) => {
    return await httpController.put(`/students/${studentId}`, studentData); // Use the HTTP controller
  };

  export const deleteStudent = async (studentId) => {
    return await httpController.delete(`/students/${studentId}`); // Use the HTTP controller
  };    