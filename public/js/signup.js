// any logic for the signup functionality would go here
// hint- remember to import them in your handlebars!
const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const name = document
      .querySelector('#name')
      .value.trim();
    const password = document
      .querySelector('#signup-password')
      .value.trim();

      const email = document
      .querySelector('#signup-email')
      .value.trim();
  
  console.log(name,password,email);
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
    
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('click', signupFormHandler);
    console.log("hooked up");