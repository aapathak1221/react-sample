import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function VerifyRegistration({ students, updateStudentStatus }) {
  const [regNumber, setRegNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
    const [studentDetails, setStudentDetails]= useState(null)
  const handleInputChange = (e) => {
    setRegNumber(e.target.value);
  };

  const handleAccepted = () => {
    if(studentDetails) {
      studentDetails.status = 'Accepted';
      updateStudentStatus(studentDetails.regNumber, 'Accepted'); // Notify parent
      setVerificationResult(`Student ${studentDetails.name} has been accepted.`);
    }
  }

  const handleRejected = () => {
    if(studentDetails) {
      studentDetails.status = 'Rejected';
      updateStudentStatus(studentDetails.regNumber, 'Rejected'); // Notify parent
      setVerificationResult(`Student ${studentDetails.name} has been rejected.`);
    }
  }

  const handleSearch = () => {
    setStudentDetails(null);
    const student = students.find((s) => s.regNumber === regNumber);

    if (student) {
      setVerificationResult(`Student Found: ${student.name}`);
      setStudentDetails(student);
    } else {
      setVerificationResult('Student not found.');
    }
  };

  return (
    <div style={{ padding: '20px' , backgroundColor:'#efe2ef' }}>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        Verify Student Registration
      </Typography>
      <TextField
        label="Registration Number"
        value={regNumber}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginTop: '10px' }}
      >
        Search
      </Button>
      <hr/>
      {
      studentDetails && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Student Details:</Typography>
          <Typography>Name: {studentDetails.name}</Typography>
          <Typography>Registration Number: {studentDetails.regNumber}</Typography>
          <Typography>Date of Birth: {studentDetails.dob}</Typography>
          <Typography>Address: {studentDetails.address}</Typography>
          <Typography>Gender: {studentDetails.gender}</Typography>
          <Typography>Status: {studentDetails.status}</Typography>
        </div>
      )}
        < Button
        variant="contained"
        color="primary"
        onClick={() => handleAccepted()}
        style={{ marginTop: '10px' }}
        >
        Acccept
      </Button>

      < Button
        variant="contained"
        color="secondary"
        onClick={() => handleRejected()}
        style={{ marginTop: '10px', marginLeft: '10px' }}
        >
        Reject
      </Button>

      {verificationResult && (
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          {verificationResult}
        </Typography>
      )}
    </div>
  );
}

export default VerifyRegistration;