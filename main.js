const btn = document.querySelector('button');
const div = document.querySelector('div');

const text = [
    'I think what better name for your child will - ',
    'Yes! its really good choice for your child, she\'s will be name - ', 
    '100%, that will good name '
]
const names = ['Daria', 'Olga', 'Weronika', 'Tatiana', 'Wiktoria', 'Nina', 'Klaudia']


function randomTimes(){
    const random = names[Math.floor(Math.random()*names.length)];
    const randomText = text[Math.floor(Math.random()*text.length)];
    div.textContent = `${randomText} ${random}`;
    div.style.fontSize = "30px"
    div.style.textAlign = 'center'
}



btn.addEventListener('click', randomTimes);