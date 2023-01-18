let SwitchMode = document.getElementById('switch');
SwitchMode.onclick = function () {
    let theme = document.getElementById('theme');
    if (theme.getAttribute('href')=='light-theme.css'){
        theme.href = "black-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
    
    
    
}

