function showScene(current, next){

    // Hide all scenes
    document.querySelectorAll(".scene").forEach(scene=>{
        scene.classList.remove("active");
    });

    // Show next scene
    document.querySelector(next).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
function enterWorld(){
    document.getElementById("story").scrollIntoView({
        behavior:"smooth"
    });
}
function startJourney(){

    const music=document.getElementById("bgMusic");

    music.volume=0.4;

    music.play();

    document.getElementById("intro-screen").style.display="none";

    document.getElementById("loading-screen").style.display="flex";

    setTimeout(()=>{

        document.getElementById("loading-screen").style.display="none";

    },2500);

}
function checkAnswer(correct){
    if(correct){
        showScene('#quiz','#envelope');
    }else{
        alert("😂 Wrong answer! Try again.");
    }
}
function openEnvelope(){
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    document.querySelector(".paper").style.transform = "translateY(-80px)";
    setTimeout(() => {
        showScene('#envelope','#letter');
    }, 1500);
}
function showFinalVideo(){

    showScene('#fireworks','#final-video');

    const video=document.getElementById("birthdayVideo");

    video.play();

}