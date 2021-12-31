import './style.css'
import {header, footer, createHome} from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'

const content = document.querySelector('#content')

function loadPage() {
    content.appendChild(header())
    createHome()
    content.appendChild(footer())

    menuBtn.addEventListener('click', createMenu)
    contactBtn.addEventListener('click', createContact)
}

loadPage()




