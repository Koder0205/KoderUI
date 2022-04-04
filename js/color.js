document.getElementById('color-light').addEventListener("click", SetColorLight);
document.getElementById('color-dark').addEventListener("click", SetColorDark);

const storedtheme = localStorage.getItem('colortheme');

if(storedtheme !== null){
    document.documentElement.setAttribute('color', storedtheme);
}

function SetColorLight(){
    document.documentElement.setAttribute('color','light');
    localStorage.setItem("colortheme", 'light');
}

function SetColorDark(){
    document.documentElement.setAttribute('color','dark');
    localStorage.setItem("colortheme", 'dark');
}

