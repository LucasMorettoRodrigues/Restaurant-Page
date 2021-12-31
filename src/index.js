import './style.css'
import oracleCookies from './oracleCookies.jpg'
import cake from './merovingiansCake.jpg'
import pasta from './neoPasta.jpg'
import steak from './steak.jpg'
import mush from './mush.jpg'
import wine from './wine.jpg'
import {header, footer, createHome} from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'

const content = document.querySelector('#content')

content.appendChild(header())
createHome()
content.appendChild(footer())

menuBtn.addEventListener('click', createMenu)
contactBtn.addEventListener('click', createContact)




