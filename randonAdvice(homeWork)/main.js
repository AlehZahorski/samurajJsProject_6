const input = document.querySelector('input');
const btnAdd = document.getElementById('btnAdd');
const btnRemove = document.getElementById('btnRemove');
const btnShowAdvice = document.getElementById('btnShowAdvice');
const btnShowPossibility = document.getElementById('btnShowPossibility');
const div = document.querySelector('div');
const ArrayData = ['Walcz!', 'Przemysl to jeszcze raz..'];
div.style.fontSize = "25px";

const AddNewAdvice = () => {
    event.preventDefault();
    const newAdvice = input.value;
    ArrayData.push(`${newAdvice}, `);
    input.value = "";
    alert(`Dodales nowa opcje: "${newAdvice}"`);
}
const removeAllData = (e) => {
    e.preventDefault();
    for(let i = 0; i <= ArrayData.length; i++){
        ArrayData.splice(i);
    }
    div.textContent = ""
}
const showAdvice = () => {
    event.preventDefault();
    let index = Math.floor(Math.random()*ArrayData.length);
    div.textContent = ArrayData[index];
}

const showPossibility = () => {
    event.preventDefault();
    div.textContent = ` "${ArrayData}" \n`;
}








btnAdd.addEventListener('click', AddNewAdvice);
btnRemove.addEventListener('click', removeAllData);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowPossibility.addEventListener('click', showPossibility);


//splice(index array) - remove elements from table

//random from 5 to 7 Math.random() * (7-5) + 5
// math.random() * (max - min) + min