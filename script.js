const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#cpass');
const signUpButton = document.querySelector('.myButton');
const msg = document.querySelector('#message');

signUpButton.addEventListener('click', (e) => {
   if (password.value === '' || confirmPassword.value === '') {
      msg.textContent = 'IS NOT CONFIRMED';
      msg.style.color = 'gray';
      e.preventDefault();
      setTimeout(() => {
         msg.textContent = '';
      }, 2500);
   } else if (password.value === confirmPassword.value) {
      console.log(`MATCHED`);
      msg.textContent = 'IS MATCHED';
      msg.style.color = 'blue';
      setTimeout(() => {
         msg.textContent = '';
      }, 2500);
   } else {
      msg.textContent = 'IS NOT MATCHED';
      msg.style.color = 'red';
      e.preventDefault();
      setTimeout(() => {
         msg.textContent = '';
      }, 2500);
   }
});
