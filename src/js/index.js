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
let menuLeftWidth = '350px'
let menuLeftHiddenWidth = `-${menuLeftWidth}`
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
menuDisplay.style.height = 'auto'

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

      let bodyC = document.getElementsByClassName('c-body')[0]
      bodyC.style.opacity = '0.3'
      let bodyf = document.getElementsByClassName('f-body')[0]
      bodyf.style.opacity = '0.3'
    } else {
      menuLeftWidth = '350px'
      menuHeader.style.width = menuLeftWidth
      menuButton.style.transform = 'rotateX(180deg)'
      menuHeader.style.marginLeft = '0px'
      menuOpen.setAttribute('class', 'fa fa-xmark')
      menuButton.setAttribute('onclick', 'clickMenuClose()')

      let bodyC = document.getElementsByClassName('c-body')[0]
      bodyC.style.opacity = '0.5'

      let bodyf = document.getElementsByClassName('f-body')[0]
      bodyf.style.opacity = '0.5'
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

  let bodyC = document.getElementsByClassName('c-body')[0]
  bodyC.style.opacity = '1'

  let bodyf = document.getElementsByClassName('f-body')[0]
  bodyf.style.opacity = '1'
}

// c-b-t-content
function setSlide() {
  let slide = Array.from(document.getElementsByClassName('slidec'))
  let containerSlideWidth = document.getElementById('slide-content').clientWidth
  let containerSlideHeight =
    document.getElementById('slide-content').clientHeight
  slide.forEach((slide) => {
    slide.style.width = `${containerSlideWidth}px`
    slide.style.height = `${containerSlideHeight}px`
    slide.style.position = 'absolute'
  })
}
setSlide()

// Menu Content
let listMenuLeft = document.createElement('div')
listMenuLeft.setAttribute('class', 'list-items-left-menu')

let menuContainerTagOpen = '<nav class="menu-nav-right" id="right-nav-content">'
let menuContainerTagClose = '</nav>'
let menuLinkOpen = '<a class="menu-li-link-a"'
let menuLinkClose = '</a>'
menuDisplay.innerHTML = menuContainerTagOpen + menuContainerTagClose
let setMenuConatinerListOpen = '<ul id="ex-list-menu">'
let setMenuConatinerListClose = '</ul>'

menuDisplay.appendChild(listMenuLeft)
let iconsListLeft = document.querySelector('.list-items-left-menu')
let flexDisplayIcons = document.createElement('div')
flexDisplayIcons.setAttribute('id', 'flex-icons-left')
iconsListLeft.appendChild(flexDisplayIcons)
let areaIcons = document.getElementById('flex-icons-left')

let icon1 = document.createElement('div')
areaIcons.appendChild(icon1)
icon1.innerHTML = '<i class="bi bi-person"></i>'
icon1.setAttribute('class', 'div-icon-cont')
icon1.setAttribute('title', 'Meu Perfil')

let icon2 = document.createElement('div')
areaIcons.appendChild(icon2)
icon2.innerHTML = '<i class="bi bi-heart"></i>'
icon2.setAttribute('class', 'div-icon-cont')
icon2.setAttribute('title', 'Favoritos')

let icon3 = document.createElement('div')
areaIcons.appendChild(icon3)
icon3.innerHTML = '<i class="bi bi-cart3"></i>'
icon3.setAttribute('class', 'div-icon-cont')
icon3.setAttribute('title', 'Meu Carrinho')

let icon4 = document.createElement('div')
areaIcons.appendChild(icon4)
icon4.innerHTML = '<i class="bi bi-gear"></i>'
icon4.setAttribute('class', 'div-icon-cont')
icon4.setAttribute('title', 'Configurações')

let icon5 = document.createElement('div')
areaIcons.appendChild(icon5)
icon5.innerHTML = '<i class="bi bi-bookmark-check"></i>'
icon5.setAttribute('class', 'div-icon-cont')
icon5.setAttribute('title', 'Salvos')

let icon6 = document.createElement('div')
areaIcons.appendChild(icon6)
icon6.innerHTML = '<i class="bi bi-chat"></i>'
icon6.setAttribute('class', 'div-icon-cont')
icon6.setAttribute('title', 'Chat')

let icon7 = document.createElement('div')
areaIcons.appendChild(icon7)
icon7.innerHTML = '<i class="bi bi-question"></i>'
icon7.setAttribute('class', 'div-icon-cont')
icon7.setAttribute('title', 'Dúvidas')

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
