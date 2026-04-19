const API_URL = 'http://localhost:8080/my-app/students'; // Replace with your actual API endpoint

export const registerStudent = async (studentData) => {
    try {
        const response = await fetch(API_URL, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });
        if (!response.ok) {
            throw new Error('Failed to register student');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const fetchStudents = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) { 
            throw new Error('Failed to fetch students');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}