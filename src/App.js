
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import StudentForm from './StudentForm';


function App() {
  return (
    <div >
    <TextField id="outlined-basic" 
                label="Outlined" 
                variant="outlined" />
    
    <StudentForm />
</div>
  );
}

export default App;
