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
let menuRightWidth = '300px'
let menuRighHiddenWidth = `-${menuRightWidth}`
let menuDefaultTransition = 'all .5s ease'
let menuButton = document.getElementById('bt-nav-menu-id')
menuButton.setAttribute('onclick', 'clickMenuForDisplay()')
let menuHeader = document.createElement('div')
menuHeader.setAttribute('class', 'display-menu')
menuHeader.setAttribute('id', 'display-menu-id')
menuHeader.style.width = menuRightWidth
menuHeader.style.marginRight = menuRighHiddenWidth
bodyHtml.appendChild(menuHeader)
let menuDisplay = document.querySelector('#display-menu-id')

// Event Menu Display
const clickMenuForDisplay = () => {
  let menuOpen = document.getElementById('bt-menu-h')
  if (menuHeader.style.marginRight == menuRighHiddenWidth) {
    if (document.body.clientWidth > 600) {
      menuButton.style.transform = 'rotateX(180deg)'
      menuHeader.style.marginRight = '0px'
      menuHeader.style.position = 'fixed'
      menuOpen.setAttribute('class', 'fa fa-rectangle-xmark')
      menuButton.setAttribute('onclick', 'clickMenuClose()')
    } else {
      menuRightWidth = '70%'
      menuHeader.style.width = menuRightWidth
      menuHeader.style.display = 'block'
      menuButton.style.transform = 'rotateX(180deg)'
      menuHeader.style.marginRight = '0px'
      menuHeader.style.position = 'fixed'
      menuOpen.setAttribute('class', 'fa fa-rectangle-xmark')
      menuButton.setAttribute('onclick', 'clickMenuClose()')
    }
  }
}

const clickMenuClose = () => {
  menuOpen = document.getElementById('bt-menu-h')
  menuButton.style.transform = 'rotateX(-180deg)'
  menuHeader.style.marginRight = menuRighHiddenWidth
  menuOpen.setAttribute('class', 'fa fa-bars')
  menuButton.style.transform = 'rotateX()'
  menuButton.style.transform = 'none'
  menuButton = document.getElementById('bt-nav-menu-id')
  menuButton.setAttribute('onclick', 'clickMenuForDisplay()')
}

// Mobile

// Menu Content
let menuContainerTagOpen = '<nav class="menu-nav-right" id="righ-nav-content">'
let menuContainerTagClose = '</nav>'
let menuLinkOpen = '<a class="menu-li-link-a"'
let menuLinkClose = '</a>'
menuDisplay.innerHTML = menuContainerTagOpen + menuContainerTagClose
let setMenuConatinerListOpen = '<ul id="ex-list-menu">'
let setMenuConatinerListClose = '</ul>'
let getMenuArea = document.getElementById('righ-nav-content')
getMenuArea.innerHTML = setMenuConatinerListOpen + setMenuConatinerListClose
let getMenuAreaUl = document.getElementById('ex-list-menu')
let getMenuUL = getMenuAreaUl.setAttribute('class', 'ex-menu-list-r')
const setLinksMenu = [
  'hardware',
  'periféricos',
  'games',
  'cadeiras',
  'computadores',
  'celular e smartphones',
  'tv',
  'tablets',
  'outros',
]
setLinksMenu.forEach((link) => {
  let liLink = document.createElement('li')
  let iconBeforeLink = '<i class="fa-solid fa-angle-left"></i>'
  liLink.setAttribute('class', 'li-link-nav-right')
  liLink.innerHTML =
    menuLinkOpen +
    `href="${link.toLowerCase()}-page"` +
    '>' +
    iconBeforeLink +
    `<p class="text-link-m-right">${link}</p>` +
    menuLinkClose
  getMenuAreaUl.insertAdjacentElement('beforeend', liLink)
})

// Mobile
