function addClasses(){
    const buttons = document.querySelectorAll('button');
    for(let i=1; i<=buttons.length; i++){
        if (i<4) {
            buttons[i-1].style.setProperty('color','var(--eerieBlack)')
            buttons[i-1].style.setProperty('background-color','var(--lightGray)');
        }
        else if (i%4 === 0|| i ===19){
            buttons[i-1].style.setProperty('background-color','var(--vividGamboge');
            buttons[i-1].style.setProperty('color', 'white');
        }
        else{
            buttons[i-1].style.setProperty('background-color','var(--darkLiver)');
        }

    }

}
function addListeners(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>console.log(e.target.textContent));
    });
}

addClasses();
addListeners();