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
            /*document.getElementsByClassName("question").style.visibility = "hidden";*/
            listQuestion = document.getElementsByClassName("question");
            for (let i = 0; i < listQuestion.length; i++) {
                listQuestion[i].style.visibility = "hidden";
            };
            document.getElementById("subFinal").style.visibility = "visible";
        };
    };
});