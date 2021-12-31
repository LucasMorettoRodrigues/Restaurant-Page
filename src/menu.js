import oracleCookies from './oracleCookies.jpg'
import cake from './merovingiansCake.jpg'
import pasta from './neoPasta.jpg'
import steak from './steak.jpg'
import mush from './mush.jpg'
import wine from './wine.jpg'

class MenuItem {
    constructor(name, img, description) {
        this.name = name
        this.img = img
        this.description = description
    }

    makeElem() {
        const item = document.createElement('div')
        item.classList.add('menuItems')
        item.textContent = this.name
        const itemImg = new Image()
        itemImg.src = this.img
        itemImg.classList.add('menuImg')
        item.appendChild(itemImg)
        const desc = document.createElement('div')
        desc.classList.add('itemDescription')
        desc.textContent = this.description
        item.appendChild(desc)
        return item
    }
}

const itemA = new MenuItem('Oracle\'s Cookies', oracleCookies,
                            '"Delicious chocolate cookie made with love by the Oracle."')
const itemB = new MenuItem('Merovingian\'s Cake', cake,
                            '"Not just a regular cake. It has a powerful code hidden in it."')
const itemC = new MenuItem('Neo\'s Favorite Pasta', pasta,
                            '"I used to eat there. Really good noodles - Neo"')
const itemD = new MenuItem('The Matrix Steak', steak,
                            '"The Matrix is telling my brain that it is juicy, and delicious. - Cypher"')
const itemE = new MenuItem('Zion\'s Mush', mush,
                            '"Traditional from Zion. Rich in proteins, vitamins and minerals."')
const itemF = new MenuItem('Wine', wine,
                            '"The best wine of Matrix."')

const createMenu = () => {
    menuBtn.classList.add('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.remove('active')

    const menuDiv = document.createElement('Div')
    menuDiv.id = 'menu'

    menuDiv.appendChild(itemA.makeElem())
    menuDiv.appendChild(itemB.makeElem())
    menuDiv.appendChild(itemC.makeElem())
    menuDiv.appendChild(itemD.makeElem())
    menuDiv.appendChild(itemE.makeElem())
    menuDiv.appendChild(itemF.makeElem())

    content.replaceChild(menuDiv, content.children[1])
}

export default createMenu

