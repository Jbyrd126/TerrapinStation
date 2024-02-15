
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
    console.log(email,password);
  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert('Failed to log in');
      }
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

// Add event listener for the login modal submit button
document.querySelector('.login-submit').addEventListener('click', loginFormHandler);



