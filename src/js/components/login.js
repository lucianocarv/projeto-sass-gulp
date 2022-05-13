const loginButtonAct = document.querySelector('#login-bt-top')
const bodyContent = document.querySelector('body')
const containerLoginOpen = document.createElement('div')
bodyContent.appendChild(containerLoginOpen)
containerLoginOpen.classList.add('login-area-content')
containerLoginOpen.classList.add('mode-off')
loginButtonAct.addEventListener('click', openLogin)

function openLogin() {
  containerLoginOpen.classList.remove('mode-off')
  containerLoginOpen.classList.add('mode-on')
  loginButtonAct.removeEventListener('click', openLogin)
  loginButtonAct.addEventListener('click', closeLogin)

  let bodyC = document.getElementsByClassName('c-body')[0]
  bodyC.style.opacity = '0.5'
  let bodyf = document.getElementsByClassName('f-body')[0]
  bodyf.style.opacity = '0.5'
}

function closeLogin() {
  containerLoginOpen.classList.remove('mode-on')
  containerLoginOpen.classList.add('mode-off')
  loginButtonAct.addEventListener('click', openLogin)

  let bodyC = document.getElementsByClassName('c-body')[0]
  bodyC.style.opacity = '1'
  let bodyf = document.getElementsByClassName('f-body')[0]
  bodyf.style.opacity = '1'
}

// Create Content
const containerLogin = document.querySelector('.login-area-content')
const containerChildLogin = document.createElement('div')
containerChildLogin.classList.add('container-child-login')
containerLogin.appendChild(containerChildLogin)
