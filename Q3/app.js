document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable');
    const studentBody = document.getElementById('studentBody');
    const editForm = document.getElementById('editForm');
    const editStudentForm = document.getElementById('editStudentForm');
    const cancelEdit = document.getElementById('cancelEdit');

    let students = [];
    let editIndex = -1;

    function renderTable() {
        studentBody.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
            studentBody.appendChild(row);
        });
    }

    function addStudent(student) {
        students.push(student);
        renderTable();
    }

    function updateStudent(index, student) {
        students[index] = student;
        renderTable();
        cancelEditing();
    }

    function deleteStudent(index) {
        students.splice(index, 1);
        renderTable();
    }

    function editStudent(index) {
        const student = students[index];
        document.getElementById('editName').value = student.name;
        document.getElementById('editAge').value = student.age;
        document.getElementById('editGrade').value = student.grade;
        editIndex = index;
        editForm.classList.remove('hidden');
    }

    function cancelEditing() {
        editForm.classList.add('hidden');
        editIndex = -1;
    }

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const grade = document.getElementById('grade').value;

        if (editIndex === -1) {
            addStudent({ name, age, grade });
        } else {
            updateStudent(editIndex, { name, age, grade });
        }

        studentForm.reset();
    });

    editStudentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('editName').value;
        const age = document.getElementById('editAge').value;
        const grade = document.getElementById('editGrade').value;

        if (editIndex !== -1) {
            updateStudent(editIndex, { name, age, grade });
        }
    });
    cancelEdit.addEventListener('click', cancelEditing);

    window.editStudent = editStudent;
    window.deleteStudent = deleteStudent;
});