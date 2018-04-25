'use strict';

var radioGroups = document.querySelectorAll('.radio');
var userHTML = document.createElement('div');
userHTML.classList.add('user');
userHTML.innerHTML = '<img src="images/users/profile.jpg"><div class="hidden"><img src="images/users/profile.jpg"> Koos Bavinck</div>';

radioGroups.forEach(function (radio) {
  var users = radio.querySelector('.users');
  var input = radio.querySelector('input');
  input.addEventListener('change', function () {
    if (input.checked) {
      users.appendChild(userHTML);
      userHTML.classList.remove('newUser');
      userHTML.classList.add('newUser');
    }
  });
});