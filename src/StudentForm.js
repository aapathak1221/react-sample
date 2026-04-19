import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel'

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', dob: '', address: '', gender: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log('Form submitted with data:', formData);
    e.preventDefault();
    const newStudent = { ...formData };
    setStudents([...students, newStudent]);
    setFormData({ name: '', dob: '', address: '' });
  };

  const handleDelete = (index) => {
    
    const studentToDelete = window.confirm(`Are you sure you want to delete ${students[index].name}?`);
    if(!studentToDelete) return;
    const delStudent = students.filter((_, i) => i !== index);
    setStudents(delStudent);
  }

  const handleEdit = (index) => {
    const isEdit = window.confirm(`Are you sure you want to edit ${students[index].name}? This will remove the student from the list until you submit the form again.`); 
    if(!isEdit) return;
    const studentToEdit = students[index];
    setFormData(studentToEdit);
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  }

  const totalStudents = students.length;
  const totalMale = students.filter(student => student.gender === 'male').length;
  const totalFemale = students.filter(student => student.gender === 'female').length; 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <FormLabel component="legend" style={{ marginTop: '10px' }}>Gender</FormLabel>
        <RadioGroup
          row
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Register
        </Button>
      </form>

      <h2>Registered Students</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.dob}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2>Student Statistics</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Male Students: {totalMale}</p>
      <p>Female Students: {totalFemale}</p>
    </div>
  );
}

export default StudentForm;