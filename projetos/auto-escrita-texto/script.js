const text = 'Hey! Vamos aprender programação juntos? Seja bem-vindo ao TechLy! _             '
let index = 0;

function writeText() {
    document.body.innerText = text.slice (0, index);

    index++;
    
    if (index > text.length -1) {
        index = 0;
    }
}

setInterval(writeText, 100);