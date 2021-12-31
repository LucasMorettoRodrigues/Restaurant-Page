import oracleCookies from './oracleCookies.jpg'
import cake from './merovingiansCake.jpg'
import pasta from './neoPasta.jpg'
import steak from './steak.jpg'
import mush from './mush.jpg'
import wine from './wine.jpg'

const createMenu = () => {
    menuBtn.classList.add('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.remove('active')

    const menuDiv = document.createElement('Div')
    menuDiv.id = 'menu'

    menuDiv.appendChild(itemA())
    menuDiv.appendChild(itemB())
    menuDiv.appendChild(itemC())
    menuDiv.appendChild(itemD())
    menuDiv.appendChild(itemE())
    menuDiv.appendChild(itemF())

    content.replaceChild(menuDiv, content.children[1])
}

const itemA = () => {
    const itemA = document.createElement('div')
    itemA.classList.add('menuItems')
    itemA.textContent = 'Oracle\'s Cookies'
    const cookiesImg = new Image()
    cookiesImg.src = oracleCookies
    cookiesImg.classList.add('menuImg')
    itemA.appendChild(cookiesImg)
    return itemA
}

const itemB = () => {
    const itemB = document.createElement('div')
    itemB.classList.add('menuItems')
    itemB.textContent = 'Merovingian\'s Cake'
    const cakeImg = new Image()
    cakeImg.src = cake
    cakeImg.classList.add('menuImg')
    itemB.appendChild(cakeImg)
    return itemB
}

const itemC = () => {
    const itemC = document.createElement('div')
    itemC.classList.add('menuItems')
    itemC.textContent = 'Neo\'s Favorite Pasta'
    const pastaImg = new Image()
    pastaImg.src = pasta
    pastaImg.classList.add('menuImg')
    itemC.appendChild(pastaImg)
    return itemC
}

const itemD = () => {
    const itemD = document.createElement('div')
    itemD.classList.add('menuItems')
    itemD.textContent = 'The Matrix Steak'
    const steakImg = new Image()
    steakImg.src = steak
    steakImg.classList.add('menuImg')
    itemD.appendChild(steakImg)
    return itemD
}

const itemE = () => {
    const itemE = document.createElement('div')
    itemE.classList.add('menuItems')
    itemE.textContent = 'Zion\'s mush'
    const mushImg = new Image()
    mushImg.src = mush
    mushImg.classList.add('menuImg')
    itemE.appendChild(mushImg)
    return itemE
}

const itemF = () => {
    const itemF = document.createElement('div')
    itemF.classList.add('menuItems')
    itemF.textContent = 'Wine'
    const wineImg = new Image()
    wineImg.src = wine
    wineImg.classList.add('menuImg')
    itemF.appendChild(wineImg)
    return itemF
}

export default createMenu