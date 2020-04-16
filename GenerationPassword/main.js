const btn = document.querySelector('button');
const sections = document.querySelector('section');


const symbolForPass = 'qrp@3543!@*&$#!@#GDfqwe%^456*45roisfsd'

const codesNumber = 10;
const CharsNumber = 12;

const generationPasswordForMe = () => {
    for(let i = 1; i < codesNumber +1; i++){
        let code = '';
        for(let q = 0; q < CharsNumber; q++){
            let index = Math.floor(Math.random()*symbolForPass.length);
            code += symbolForPass[index];
        } 
        const div = document.createElement('div');
        div.textContent = `${[i]}) ${code}`;
        sections.appendChild(div)
    }
}



btn.addEventListener('click', generationPasswordForMe);
