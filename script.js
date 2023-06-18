const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const alertDiv = document.getElementById('alert');

const users = [
  { username: 'admin1', password: 'pass1' },
  { username: 'admin2', password: 'pass2' },
  { username: 'admin3', password: 'pass3' },
];

button.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  // Check if username and password match any user
  const user = users.find((u) => u.username === data.username && u.password === data.password);

  if (user) {
    window.location.href = "uady.html";
    
  } else {
    // Show alert
    alertDiv.innerHTML = 'Username or password is incorrect.';
    alertDiv.classList.add('alert');
  }
});


