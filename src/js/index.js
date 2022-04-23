// Exclusive Login Button
const headerLinks = Array.from(document.getElementsByClassName('h-nav-link'))
const lastLink = headerLinks.length - 1
const loginLink = headerLinks[lastLink]
loginLink.setAttribute('gs-bt-login', 'gs-bt-login')
const arrayOfAttr = headerLinks[lastLink].attributes.getNamedItem('gs-bt-login')
if ((arrayOfAttr.value = 'gs-bt-login')) {
  loginLink.setAttribute('id', 'id-login')
  loginLink.style.color = '#fff'
}

// Menu
let bodyHtml = document.body
const menuButton = document.getElementById('bt-nav-menu-id')
menuButton.setAttribute('onclick', 'clickMenuForDisplay()')
let menuHeader = document.createElement('div')
menuHeader.setAttribute('class', 'display-menu')
menuHeader.setAttribute('id', 'display-menu-id')
menuHeader.style.position = 'absolute'
menuHeader.style.width = '0px'
menuHeader.style.height = '100vh'
menuHeader.style.backgroundColor = 'forestGreen'
menuHeader.style.top = '0'
bodyHtml.appendChild(menuHeader)
let menuDisplay = document.querySelector('#display-menu-id')
let attrMenu = menuDisplay.ATTRIBUTE_NODE

// Event Menu Display
const clickMenuForDisplay = () => {
  if (menuHeader.style.width == '0px') {
    menuHeader.style.width = '300px'
    menuHeader.style.transition = 'all .5s ease'
    console.log('Mostrou')
  } else {
    menuHeader.style.width = '0px'
    console.log('Recolheu')
  }
}
