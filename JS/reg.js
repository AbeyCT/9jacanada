document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simple validation example
  let city = document.getElementById('city').value;
  let cityRegex = /^[a-zA-Z\s\-]{2,50}$/;

  if (!cityRegex.test(city)) {
      alert('City name is invalid. Please enter a valid city (letters, spaces, and hyphens only).');
      return;
  }

  // If form is valid
  let successMessage = document.getElementById('successMessage');
  successMessage.innerHTML = 'Registration successful!';

  // Here you can update registration or send the data to your server
});
