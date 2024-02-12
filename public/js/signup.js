// any logic for the signup functionality would go here
// hint- remember to import them in your handlebars!
const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const name = document
      .querySelector('#name')
      .value.trim();
    const password = document
      .querySelector('#password')
      .value.trim();

      const email = document
      .querySelector('#email')
      .value.trim();
  
  
    if (password.length >= 8 && name) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          password: password,
          email: email
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    } else {
      alert(
        'Please include both a username and password, and make sure your password is at least 8 characters long'
      );
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);