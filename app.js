const API_URL = 'http://localhost:3000/users';
const userList = document.getElementById('user-list');
const userForm = document.getElementById('user-form');
const userIdInput = document.getElementById('user-id');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const saveButton = document.getElementById('save-btn');

// Obtener usuarios (GET)
async function getUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();
    renderUsers(users);
}

//Agregar o Editar usuario (POST o PUT)
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = userIdInput.value;
    const name = nameInput.value;
    const email = emailInput.value;

    if (id) {
        // Actualizar usuario (PUT)
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
    } else {
        // Crear nuevo usuario (POST)
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
    }

    userForm.reset();
    userIdInput.value = '';
    saveButton.textContent = 'Guardar';
    getUsers(); // Refrescar lista
});

// Eliminar usuario (DELETE)
async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    getUsers(); // Refrescar lista
}


//Cargar datos en el formulario para editar
function editUser(user) {
    userIdInput.value = user.id;
    nameInput.value = user.name;
    emailInput.value = user.email;
    saveButton.textContent = 'Actualizar';
}

// Renderizar usuarios en la interfaz
function renderUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${user.name}</strong> - ${user.email} 
            <button onclick='editUser(${JSON.stringify(user)})'>Editar</button>
            <button onclick="deleteUser('${user.id}')">Eliminar</button>
        `;
        userList.appendChild(li);
    });
}


// Cargar usuarios al iniciar
getUsers();
