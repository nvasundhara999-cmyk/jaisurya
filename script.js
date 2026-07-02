// ==========================
// STARS
// ==========================

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("div");
        star.classList.add("star");

        star.innerHTML = Math.random() > 0.5 ? "⭐" : "✨";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDuration = (1 + Math.random() * 3) + "s";
        star.style.fontSize = (10 + Math.random() * 20) + "px";

        starsContainer.appendChild(star);
    }
}
function showPage(pageId){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    const el = document.getElementById(pageId);
    if(el){
        el.classList.add("active");
    }
}

// ==========================
// START JOURNEY
// ==========================

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("landingPage").style.display = "none";
    showPage("station1");
});

// ==========================
// NEXT PAGE
// ==========================

function nextPage(){
    showPage("station2");
}

function showStation3(){
    showPage("station3");
}

function showStation4(){
    showPage("station4");
}

function showStation5(){
    showPage("station5");
}

function showStation6(){
    showPage("station6");
}

function showFinal(){
    showPage("finalPage");
}
function arriveAtDestination(){

    showPage("birthdayPage");
    revealBirthday();

}
function revealBirthday(){

    const text =
    "🎂 HAPPY BIRTHDAY SURYA 💙\n\nJourney Status:\nStill Continuing... 🚂✨";

    const target =
    document.getElementById("typingBirthday");

    target.innerHTML = "";

    let i = 0;

    function type(){

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,90);

        }

    }

    type();

}