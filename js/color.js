document.getElementById('color-light').addEventListener("click", SetColorLight);
document.getElementById('color-normal').addEventListener("click", SetColorNormal);
document.getElementById('color-dark').addEventListener("click", SetColorDark);

function SetColorLight(){
    document.documentElement.setAttribute('color','light');
}

function SetColorNormal(){
    document.documentElement.setAttribute('color','normal');
}

function SetColorDark(){
    document.documentElement.setAttribute('color','dark');
}