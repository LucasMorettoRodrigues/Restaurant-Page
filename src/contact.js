const createContact = () => {
    contactBtn.classList.add('active')
    menuBtn.classList.remove('active')
    homeBtn.classList.remove('active')

    const contactDiv = document.createElement('div')
    contactDiv.id = 'contactDiv'
    contactDiv.innerHTML = 'Address: Zion <br/><br/> Phone: 555-5555 <br/><br/> Email: scriptaurante@matrix.com'

    content.replaceChild(contactDiv, content.children[1])
}

export default createContact