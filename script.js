const sound = new Audio();
console.log("Hello World");

function func(){
    sound.src = "sound.mp3";
    sound.play();
    confirm("Are you sure that you want to join shabbhirism?");
}



document.getElementById("button").addEventListener("click", func);

