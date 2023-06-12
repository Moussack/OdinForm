const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#cpass');
const signUpButton = document.querySelector('.myButton');
const msg = document.querySelector('#message');

signUpButton.addEventListener('click', (e) => {
   if (password.value === '' || confirmPassword.value === '') {
      console.log(`PLEASE INPUT PASS`);
   } else if (password.value === confirmPassword.value) {
      console.log(`MATCHED`);
      msg.textContent = 'MATCHED';
      msg.style.color = 'blue';
   } else {
      msg.textContent = 'DIDNT MATCHED';
      msg.style.color = 'red';
      e.preventDefault();
   }
});
