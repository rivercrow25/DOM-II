// Your code goes here

document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.fontSize = '50px'
    })
    item.addEventListener('mouseleave', () => {
        item.style.fontSize = '16px'
    })
})

const logo = document.querySelector('.logo-heading')

logo.addEventListener('click', () => {
    logo.style.backgroundColor = 'yellow'
})

logo.addEventListener('dblclick', () => {
    logo.style.backgroundColor = 'white'
})

const mapImg = document.querySelector('.img-content img')

mapImg.addEventListener('contextmenu', () => {
    mapImg.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80'
})

const headline = document.querySelector('header h2')

window.addEventListener('scroll', () => {
    headline.textContent = 'Hey Wait, Hold On'
})

document.addEventListener('keypress', key)

function key(e) {
    headline.textContent = 'Welcome To Fun Bus!'
}

logo.addEventListener('mousedown', () => {
    logo.textContent = 'Hello world'
})

logo.addEventListener('mouseup', () => {
    logo.textContent = 'Fun Bus'
})

const lastimg = document.querySelector('.content-destination img')
lastimg.addEventListener('auxclick', () => {
    lastimg.src = 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})