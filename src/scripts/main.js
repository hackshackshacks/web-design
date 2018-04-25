// const nav = document.querySelector('#fixedNav')
// const subjectHeader = document.querySelector('#vakbeschrijving')

// window.addEventListener('scroll', () => {
//   let navBounds = nav.getBoundingClientRect()
//   let headerBounds = subjectHeader.getBoundingClientRect()
//   if (headerBounds.top < 64) {
//     nav.style.cssText = `position: fixed; left: ${navBounds.left}px; top: 2rem; width: ${navBounds.width}px`
//   } else {
//     nav.style.cssText = ''
//   }
// })
const radioGroups = document.querySelectorAll('.radio')
const userHTML = document.createElement('div')
userHTML.classList.add('user')
userHTML.innerHTML = '<img src="images/users/profile.jpg"><div class="hidden"><img src="images/users/profile.jpg"> Koos Bavinck</div>'

radioGroups.forEach((radio) => {
  const users = radio.querySelector('.users')
  const input = radio.querySelector('input')
  input.addEventListener('change', () => {
    if (input.checked) {
      console.log('test')
      users.appendChild(userHTML)
    } else {
      users.insertAdjacentHTML('beforeend', 'test')
    }
  })
})

