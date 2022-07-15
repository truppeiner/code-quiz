let timer = document.querySelector('.timer-clock');

let startQuiz = function() {
    let Questions = function() {

        var timeRemaining = 120;

        var questionTimer = setInterval(function(){
            if(timeRemaining <= 0){
                clearInterval(questionTimer);
                timer.textContent = "No Time Remaining!";
            }
            timer.textContent = "Time: " + timeRemaining  + " seconds left";
    
            timeRemaining -= 1;
        }, 1200);

        let quizQuestion = document.querySelector(".quiz-question");
            quizQuestion.textContent="What language creates the basic layout of any website?"
            document.querySelector('.start-section').hidden = true;

        let questionOneA = document.querySelector('.option-1');
            let answerOneA = document.createElement("button");
                answerOneA.className = "btn btn-success m-3 answer-1 w-50";
                answerOneA.textContent = "A. HTML";
            questionOneA.appendChild(answerOneA);
            // pass to second question
            questionOneA.addEventListener('click', secondQuestion);


        let questionOneB = document.querySelector('.option-2'); 
            let answerOneB = document.createElement("button");
                answerOneB.className = "btn btn-success m-3 answer-2 w-50";
                answerOneB.textContent = "B. Python";
            questionOneB.appendChild(answerOneB);
            // check to see if correct answer is written is sellected
            questionOneB.addEventListener('click', checkB);
            function checkB(){
                answerOneB.className = 'btn btn-danger m-3 answer-2 w-50';
                answerOneB.textContent = 'incorrect try again!';
                timeRemaining -= 10;
            }

        let questionOneC = document.querySelector('.option-3');
            let answerOneC = document.createElement('button');
                answerOneC.className = "btn btn-success m-3 answer-3 w-50";
                answerOneC.textContent = "C. Javascript";
            questionOneC.appendChild(answerOneC);
            // check answer
            questionOneC.addEventListener('click', checkC);
            function checkC (){
                answerOneC.className = 'btn btn-danger m-3 answer-2 w-50';
                answerOneC.textContent = 'incorrect try again!';
                timeRemaining -= 10;
            }
        function secondQuestion(){
            // create second question
            quizQuestion.textContent = "What semantic tag would you use to create a header in HTML?"
            answerOneA.textContent = 'A. <header>';
            questionOneA.addEventListener('click', thirdQuestion);

            answerOneB.className = "btn btn-success m-3 answer-2 w-50";
            answerOneB.textContent = 'B. <p>';

            answerOneC.className = "btn btn-success m-3 answer-3 w-50";
            answerOneC.textContent = 'C. <div>';
        }

        function thirdQuestion(){
            quizQuestion.textContent = "What semantic tag would you use to create a link?"
            answerOneA.textContent = "A. <a>";
            questionOneA.addEventListener('click', quizComplete);

            answerOneB.className = "btn btn-success m-3 answer-2 w-50";
            answerOneB.textContent = "B. <footer>";

            answerOneC.className = "btn btn-success m-3 answer-3 w-50";
            answerOneC.textContent = "C. <main>";
        }

        function quizComplete(){
            quizQuestion.textContent = "Congratulations! You have completed the code quiz!";
            questionOneA.remove();
            questionOneB.remove();
            questionOneC.remove();
            timer.remove();

            var finalTime = timeRemaining;

            let finalScore = document.createElement('div');
            finalScore.className = 'final-score m-4'
            finalScore.textContent = "Your Final Score Is: " + finalTime;

            quizQuestion.appendChild(finalScore);
        }
    }
    Questions();
}


 
    document.querySelector(".start-button").addEventListener('click', startQuiz);


