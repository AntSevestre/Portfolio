let darkMode = false;

function applyTheme(){
    if(darkMode){
        // dark mode
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "#202124");
        document.getElementById("dark_light_mode").innerHTML = "Light mode";
    }else{
        // light mode
        document.documentElement.style.setProperty("--text-color", "#202124");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("dark_light_mode").innerHTML = "Dark mode";
    }
}

function changeDarkMode(){
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode ? "on" : "off");
    applyTheme();
}

document.addEventListener('DOMContentLoaded', () => {
    darkMode = localStorage.getItem("darkMode") === "on";
    applyTheme();
});
