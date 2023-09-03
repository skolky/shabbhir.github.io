const sound = new Audio();
console.log("Hello World");

function func(){
    let thing = confirm("Are you sure that you want to join shabbhirism?");
    if (thing == true) {
        sound.src = "sound.mp3";
        sound.play();
        document.getElementById("main").innerHTML = "<p id='confirmation'>You are now following Shabbhirism.<p>";
    }
}



document.getElementById("button").addEventListener("click", func);

