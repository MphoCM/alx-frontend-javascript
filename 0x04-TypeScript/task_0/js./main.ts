// task_/js/main.ts

// Define the Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student OBJECTS
// Student ONE
const student1: Student = {
    firstName: "John",
    lastName: "Dan",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

//const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const table = document.createElement("table");

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);

