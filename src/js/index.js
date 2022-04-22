const headerLinks = Array.from(document.getElementsByClassName('h-nav-link'))
const lastLink = headerLinks.length - 1
const loginLink = headerLinks[lastLink]
loginLink.setAttribute('gs-bt-login', 'gs-bt-login')
const arrayOfAttr = headerLinks[lastLink].attributes.getNamedItem('gs-bt-login')
if ((arrayOfAttr.value = 'gs-bt-login')) {
  loginLink.style.backgroundColor = 'forestGreen'
}
