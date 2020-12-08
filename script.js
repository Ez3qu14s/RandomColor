// let btn = document.querySelector('.container div button')

function random() {
    let body = document.querySelector('.container')
    let small = document.querySelector('.container div h2 small')
    
    body.style.background = collors()

    small.textContent = collors();
}

function collors() {
    let hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color +=  hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

console.log(collors())