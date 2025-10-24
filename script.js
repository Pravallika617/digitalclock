const registerForm = document.getElementById('registerForm');
const projectList = document.getElementById('projectList');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const listItem = document.createElement('li');
    listItem.textContent = `Student: ${name}, Email: ${email}`;
    projectList.appendChild(listItem);

    registerForm.reset();
});
