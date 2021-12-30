import './style.css'
import homeImg from './scriptaurant.jpg'

const h1 = document.createElement('h1')
const h3 = document.createElement('h3')
const content = document.querySelector('#content')

h1.textContent = 'Scriptaurant'
h1.classList.add('h1')
h3.textContent = 'This is the best restaurant on all webverse!'

const myHomeImg = new Image()
myHomeImg.src = homeImg

content.appendChild(h1)
content.appendChild(h3)
content.appendChild(myHomeImg)