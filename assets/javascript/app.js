var trivQuest = [
    {
        q1: "How many Super Bowls have the Dallas Cowboys won?",
        ans: {"5", "1", "3"},
        correct: "5" 
    },
    {
        q1: "Which Dallas Cowboy is the NFL's all time leading rusher?",
        ans: {"Emmitt Smith", "Tony Dorsett", "Herchel Walker"},
        correct: "Emmitt Smith"
    },
    {
        q1: "Who is currently the QB of the Dallas Cowboys?",
        ans: {"Troy Aikman", "Tony Romo", " Dak Prescott"},
        correct: "Dak Prescott"
    }
];


var trivia = $('#quiz');
var triviaResults = $("#results");
var complete = $("#done");


function triviaQuiz () {

var output = []

trivQuest.forEach(currentQuestion, questionNumber) {

 var answers = [];

for (letter in currentQuestion.answers){

answers.push(

    <label>
    <input type="radio" name="question${questionNumber}" value="${letter}"></input>
    </label>
);

}

output.push(
    
    <div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers}.join('')</div>
);

}


function Results () {

}


triviaQuiz();



// function displayQuestion() {
//     $(".question1").html(trivQuest[0].q1);
//     $(".question2").html(trivQuest[1].q1);
//     $(".question3").html(trivQuest[2].q1);
// }
// // Make the Button to start


$('#start-btn').on("click", function() {
    $(this).parent().hide();
    $('.timeLeft').show();
    countDown(60);
    displayQuestion();
});


// Create a function for the countdown timer

    var countDown = function(seconds) {

        var timer = setInterval(function() {
            seconds = seconds - 1;
            $(".timeLeft").html("Time Remaining: " + seconds);

            if(seconds <= 0) {
                $(".timeLeft").fadeOut(500);
            }
    }, 1000);

// }

// // Check answers

