// // Exclusive Login Button
// const headerLinks = Array.from(document.getElementsByClassName('h-nav-link'))
// const lastLink = headerLinks.length - 1
// const loginLink = headerLinks[lastLink]
// loginLink.setAttribute('gs-bt-login', 'gs-bt-login')
// const arrayOfAttr = headerLinks[lastLink].attributes.getNamedItem('gs-bt-login')
// if ((arrayOfAttr.value = 'gs-bt-login')) {
//   loginLink.setAttribute('id', 'id-login')
//   loginLink.style.color = '#fff'
// }

// Menu
let bodyHtml = document.getElementById('absolute-content')
let menuLeftWidth = '300px'
let menuLeftHiddenWidth = `-${menuLeftWidth}`
let menuDefaultTransition = 'all .5s ease'
let menuButton = document.getElementById('bt-nav-menu-id')
menuButton.setAttribute('onclick', 'clickMenuForDisplay()')
let menuHeader = document.createElement('div')
menuHeader.setAttribute('class', 'display-menu')
menuHeader.setAttribute('id', 'display-menu-id')
menuHeader.style.width = menuLeftWidth
menuHeader.style.marginLeft = menuLeftHiddenWidth
bodyHtml.appendChild(menuHeader)
let menuDisplay = document.querySelector('#display-menu-id')

let getHeaderHeight = document.getElementById('h-body-id')
let clientHeightHeader = getHeaderHeight.clientHeight
menuDisplay.style.top = `${clientHeightHeader}px`
menuDisplay.style.height = '100vh'

// Event Menu Display
const clickMenuForDisplay = () => {
  let menuOpen = document.getElementById('bt-menu-h')
  menuButton.style.zIndex = '2'
  if (menuHeader.style.marginLeft == menuLeftHiddenWidth) {
    if (document.body.clientWidth > 600) {
      menuButton.style.transform = 'rotateX(180deg)'
      menuHeader.style.marginLeft = '0px'
      menuOpen.setAttribute('class', 'fa fa-xmark')
      menuButton.setAttribute('onclick', 'clickMenuClose()')
    } else {
      menuLeftWidth = '300px'
      menuHeader.style.width = menuLeftWidth
      menuHeader.style.display = 'block'
      menuButton.style.transform = 'rotateX(180deg)'
      menuHeader.style.marginLeft = '0px'
      menuOpen.setAttribute('class', 'fa fa-xmark')
      menuButton.setAttribute('onclick', 'clickMenuClose()')
    }
  }
}

const clickMenuClose = () => {
  menuOpen = document.getElementById('bt-menu-h')
  menuButton.style.transform = 'rotateX(-180deg)'
  menuHeader.style.marginLeft = menuLeftHiddenWidth
  menuOpen.setAttribute('class', 'fa fa-bars')
  menuButton.style.transform = 'rotateX()'
  menuButton.style.transform = 'none'
  menuButton = document.getElementById('bt-nav-menu-id')
  menuButton.setAttribute('onclick', 'clickMenuForDisplay()')
}

// Mobile

// Menu Content
let menuContainerTagOpen = '<nav class="menu-nav-right" id="right-nav-content">'
let menuContainerTagClose = '</nav>'
let menuLinkOpen = '<a class="menu-li-link-a"'
let menuLinkClose = '</a>'
menuDisplay.innerHTML = menuContainerTagOpen + menuContainerTagClose
let setMenuConatinerListOpen = '<ul id="ex-list-menu">'
let setMenuConatinerListClose = '</ul>'
let getMenuArea = document.getElementById('right-nav-content')
getMenuArea.innerHTML = setMenuConatinerListOpen + setMenuConatinerListClose
let getMenuAreaUl = document.getElementById('ex-list-menu')
let getMenuUL = getMenuAreaUl.setAttribute('class', 'ex-menu-list-r')

setLinksMenu.forEach((link) => {
  let liLink = document.createElement('li')
  let iconAfterLinkTab = '<i class="fa-solid fa-angle-right"></i>'
  liLink.setAttribute('class', 'li-link-nav-right')
  liLink.innerHTML =
    menuLinkOpen +
    `href="${link.toLowerCase()}-page"` +
    '>' +
    `<p class="text-link-m-right">${link}</p>` +
    iconAfterLinkTab +
    menuLinkClose
  getMenuAreaUl.insertAdjacentElement('beforeend', liLink)
})

// Mobile
