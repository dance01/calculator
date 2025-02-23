const buttons = document.querySelector('#buttons')
for (let i = 11; i >= 0; i--){
const button = document.createElement('button');
buttons.appendChild(button);
i === 0 ?  button.textContent = '0' :
i === 1 ? button.textContent = '.' :
i === 2 ?  button.textContent = '+/-' :
button.textContent = `${i-2}`;
button.setAttribute('id', `${button.textContent}`)
}