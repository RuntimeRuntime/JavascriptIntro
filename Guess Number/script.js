'use strict';
function Game() {
    this.score = 0;
    this.secretNumber = 0;
    this.highscore = 0;
    this.startUp = function () {
        this.secretNumber = Math.trunc(Math.random() * 20)+1;
        document.querySelector('.number').textContent = this.secretNumber;
        this.score = 20;
        document.querySelector('.score').textContent = this.score;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    };
    this.checkWinLose = function() {
        document.querySelector('.number').textContent = this.secretNumber;
        if(document.querySelector('.message').textContent == `Correct Number!`){
            document.querySelector('.message').textContent = `You Win!`;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            this.setHighScore();
        }
        else if(score == 0){
            document.querySelector('.message').textContent = `You Lose!`;
    
        }
    };
    this.updateScore = function(){
        this.score--;
        document.querySelector('.score').textContent = this.score;
    };
    this.setHighScore = function(){
        if(this.score > this.highscore){
            this.highscore = this.score;
            console.log(this.highscore)
            document.querySelector('.highscore').textContent = this.highscore;
        }
    };

}
const game = new Game();
game.startUp();



document.querySelector('.again').addEventListener('click', function(){
    game.startUp();

});
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if((document.querySelector('.message').textContent != `Correct Number!`) && (game.score != 0)){
        if(!guess){
            document.querySelector('.message').textContent = `No Number >:(`
        }
        // Win
        else if (guess == game.secretNumber){
            document.querySelector('.message').textContent = `Correct Number!`;
            game.checkWinLose();
        }
        // Too High
        else if (guess > game.secretNumber){
            document.querySelector('.message').textContent = `Too High`
            game.updateScore();
        }
        // Too Low
        else if (guess < game.secretNumber){
            document.querySelector('.message').textContent = 'Too Low';
            game.updateScore();
        }
        if(game.score == 0){
            game.checkWinLose();
        }
    }
});

