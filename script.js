let answerS = ["blanc", "4", "35", "noir", "nuit", "4", "ouaf", "eau", "8", "b43nn4oe8"];
let button;
let answer;

document.addEventListener('click', (event) => {
    button = event.target.getAttribute("id");
    if (button === "sub1") {
        answer = document.getElementById("r1").value;
        if (answer === answerS[0]) {
            document.getElementById("q2").style.visibility = "visible";
        }
    } else if (button === "sub2") {
        answer = document.getElementById("r2").value;
        if (answer === answerS[1]) {
            document.getElementById("q3").style.visibility = "visible";
        }
    } else if (button === "sub3") {
        answer = document.getElementById("r3").value;
        if (answer === answerS[2]) {
            document.getElementById("q4").style.visibility = "visible";
        }
    } else if (button === "sub4") {
        answer = document.getElementById("r4").value;
        if (answer === answerS[3]) {
            document.getElementById("q5").style.visibility = "visible";
        }
    } else if (button === "sub5") {
        answer = document.getElementById("r5").value;
        if (answer === answerS[4]) {
            document.getElementById("q6").style.visibility = "visible";
        }
    } else if (button === "sub6") {
        answer = document.getElementById("r6").value;
        if (answer === answerS[5]) {
            document.getElementById("q7").style.visibility = "visible";
        }
    } else if (button === "sub7") {
        answer = document.getElementById("r7").value;
        if (answer === answerS[6]) {
            document.getElementById("q8").style.visibility = "visible";
        }
    } else if (button === "sub8") {
        answer = document.getElementById("r8").value;
        if (answer === answerS[7]) {
            document.getElementById("q9").style.visibility = "visible";
        }
    } else if (button === "sub9") {
        answer = document.getElementById("r9").value;
        if (answer === answerS[8]) {
            let listQuestion = [];
            alert("La réponse finale est le premier caractère de chaque réponse !");
            listQuestion = document.getElementsByClassName("question");
            for (let i = 0; i < listQuestion.length; i++) {
                listQuestion[i].style.visibility = "hidden";
            };
            document.getElementById("subFinal").style.visibility = "visible";
            checkFinalQuestion();
        };
    };
});


function checkFinalQuestion() {
    document.addEventListener('click', (event) => {
        if (button === "subFinal") {
            answer = document.getElementById("finalAnswer").value;
            if (answer === answerS[9]) {
                //alert("bravo");
                step2();
                return;
            }
            else {
                alert("Erreur, on recommence !");
                location.reload(location.href);
            }
        };
        checkFinalQuestion();
    });
};

function step2() {
    document.getElementById("para1").innerText = "Trouve le message caché !";
    let delThis = document.getElementsByTagName("main");
    delThis[0].replaceChildren();
    let balise = document.createElement("p");
    balise.innerText = "Tape le code 'YakuZa'";
    delThis[0].append(balise);
    
}