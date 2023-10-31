let darkMode = false;

function changeDarkMode(){
    if(darkMode){
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "#202124");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("dark_light_mode").innerHTML = "Dark mode";  
    }else{
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "#202124");
        document.getElementById("dark_light_mode").innerHTML = "Light mode";
    }
}