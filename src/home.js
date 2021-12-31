const header = () => {
    const header = document.createElement('header')

    const homeBtn = document.createElement('button')
    homeBtn.id = 'homeBtn'
    homeBtn.textContent = 'Home'
    homeBtn.addEventListener('click', createHome)
    homeBtn.classList.add('btn')
    header.appendChild(homeBtn)

    const menuBtn = document.createElement('button')
    menuBtn.id = 'menuBtn'
    menuBtn.textContent = 'Menu'
    menuBtn.classList.add('btn')
    header.appendChild(menuBtn)

    const contactBtn = document.createElement('button')
    contactBtn.id = 'contactBtn'
    contactBtn.textContent = 'Contact'
    contactBtn.classList.add('btn')
    header.appendChild(contactBtn)

    return header
}

const footer = () => {
    const footerElem = document.createElement('footer')
    footerElem.textContent = '© Scriptaurant 2021. All rights reserved'

    return footerElem
}

const createHome = () => {
    homeBtn.classList.add('active')
    menuBtn.classList.remove('active')
    contactBtn.classList.remove('active')
    
    const homeDiv = document.createElement('div')
    homeDiv.id = 'homeDiv'

    const h1 = document.createElement('h1')
    h1.textContent = 'Scriptaurant'
    homeDiv.appendChild(h1)
    homeDiv.appendChild(document.createElement('hr'))

    const h3 = document.createElement('h3')
    h3.textContent = '"  The  best  restaurant  on  all  webverse!  "'
    homeDiv.appendChild(h3)

    if (content.children.length == 3) {
        content.replaceChild(homeDiv, content.children[1])
    } else {
        content.appendChild(homeDiv)
    }
}

export {
    header,
    footer,
    createHome
};
