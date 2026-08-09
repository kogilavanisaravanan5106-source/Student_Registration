var studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values from form
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Get selected gender
    var gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;


    // Get table body
    var tableBody = document.getElementById("studentTableBody");


    // Create new row
    var row = document.createElement("tr");


    // Add student details
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>

        <td>
            <button class="delete-btn" onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;


    // Add row to table
    tableBody.appendChild(row);


    // Clear the form
    studentForm.reset();

});


// Delete student
function deleteStudent(button) {

    var row = button.parentElement.parentElement;

    row.remove();

}