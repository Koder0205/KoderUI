document.getElementById('color-light').addEventListener("click", SetColorLight);
document.getElementById('color-dark').addEventListener("click", SetColorDark);

function SetColorLight(){
    document.documentElement.setAttribute('color','light');
}

function SetColorDark(){
    document.documentElement.setAttribute('color','dark');
}