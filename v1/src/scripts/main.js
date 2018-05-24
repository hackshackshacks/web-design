const radioGroups = document.querySelectorAll('.radio')
const userHTML = document.createElement('div')
userHTML.classList.add('user')
userHTML.innerHTML = '<img src="images/users/profile.jpg"><div class="hidden"><img src="images/users/profile.jpg"> Koos Bavinck</div>'

radioGroups.forEach((radio) => {
  const users = radio.querySelector('.users')
  const input = radio.querySelector('input')
  input.addEventListener('change', () => {
    if (input.checked) {
      users.appendChild(userHTML)
      userHTML.classList.remove('newUser')
      userHTML.classList.add('newUser')
    }
  })
})

