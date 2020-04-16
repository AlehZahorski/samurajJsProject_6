const ArrayData = [];
const input = document.querySelector('input');
const btn = document.getElementById('btn');
const div = document.querySelector('div');



const addNewName = () => {
  event.preventDefault(); // stop refresh page
  const newName = input.value;

    if(input.value.length > 0){
        for( index of  ArrayData){ //index is index arrayData 
            if(index === newName){
                alert('Enter new element\'s name and push or get out!')
                return; //finish function's active
            }
        }
        ArrayData.push(newName); // push data in array
        div.textContent += `${newName}, `;
        input.value = '';
    }else if(input.value == ''){
        alert('Enter name and push or buy buy!')
    } 
}


btn.addEventListener('click', addNewName);