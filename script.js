const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#cpass');
const signUpButton = document.querySelector('.myButton');
const msg = document.querySelector('#message');

function validetePass(e) {
   if (password.value === '' || confirmPassword.value === '') {
      msg.textContent = 'IS EMPTY';
      msg.style.color = 'gray';
      password.style.border = '1px solid #c9c9c9';
      password.style.outline = '1px solid #c9c9c9';
      confirmPassword.style.border = '1px solid #c9c9c9';
      confirmPassword.style.outline = '1px solid #c9c9c9';
      //e.preventDefault();
      setTimeout(() => {
         msg.textContent = '';
      }, 3500);
   } else if (password.value === confirmPassword.value || confirmPassword.value === password.value) {
      console.log(`MATCHED`);
      msg.textContent = 'MATCH';
      msg.style.color = '#5fb481';
      password.style.border = '1px solid #71bc8f';
      password.style.outline = '1px solid #71bc8f';
      confirmPassword.style.border = '1px solid #71bc8f';
      confirmPassword.style.outline = '1px solid #71bc8f';
   } else {
      msg.textContent = 'DO NOT MATCH';
      msg.style.color = '#ff0033';
      e.preventDefault();
      password.style.border = '1px solid #ff0033';
      password.style.outline = '1px solid #ff0033';
      confirmPassword.style.border = '1px solid #ff0033';
      confirmPassword.style.outline = '1px solid #ff0033';
   }
}
confirmPassword.addEventListener('input', validetePass);
signUpButton.addEventListener('input', validetePass);
signUpButton.addEventListener('click', validetePass);
