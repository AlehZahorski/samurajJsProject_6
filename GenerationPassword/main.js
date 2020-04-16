const btn = document.querySelector('button');
const sections = document.querySelector('section');


const symbolForPass = 'qrp@3543!@*&$#!@#GDfqwe%^456*45roisfsd'

const codesNumber = 1000;
const CharsNumber = 10;

const generationPasswordForMe = () => {
    for(let i = 0; i < codesNumber; i++){
        let code = '';
        for(let q = 0; q < CharsNumber; q++){
            let index = Math.floor(Math.random()*symbolForPass.length);
            code += symbolForPass[index];
        } 
        const div = document.createElement('div');
        div.textContent = code;
        sections.appendChild(div)
    }
}



btn.addEventListener('click', generationPasswordForMe);
