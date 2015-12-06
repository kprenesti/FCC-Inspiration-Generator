$(document).ready(function(){

  var allQuotes = [
    {
      quote: "The person who gets the farthest is generally the one who is willing to do and dare. The sure-thing boat never gets far from shore.",
      author: "Dale Carnegie"
    }, {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    }, {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    }, {
      quote: "Your talent is God's gift to you. What you do with it is your gift back to God.",
      author: "Leo Buscaglia"
    }, {
      quote: "Accept the challenges so that you can feel the exhilaration of victory.",
      author: "George S. Patton"
    }, {
      quote: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
      author: "Johann Wolfgang von Goethe"
    }, {
      quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      author: "Helen Keller"
    }, {
      quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar"
    }, {
      quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      author: "Samuel Beckett"
    }, {
      quote: "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
      author: "Ken Venturi"
    }, {
      quote: "Always desire to learn something useful.",
      author: "Sophocles"
    }, {
      quote: "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
      author: "Vince Lombardi"
    }, {
      quote: "Success consists of going from failure to failure without loss of enthusiasm.",
      author: "Winston Churchill"
    }, {
      quote: "Do not abandon yourselves to despair. We are the Easter people and hallelujah is our song.",
      author: "Pope John Paul II"
    }, {
      quote: "Would you like me to give you a formula for success? It\'s quite simple, really. Double your rate of failure. You are thinking of failure as the enemy of success. But it isn\'t at all. You can be discouraged by failure or you can learn from it, So go ahead and make mistakes. Make all you can. Because remember that\'s where you will find success.",
      author: "Thomas J. Watson"
    }, {
      quote: "The successful always has a number of projects planned, to which he looks forward. Anyone of them could change the course of his life overnight.",
      author: 'Mark Caine'
    }, {
      quote: "The great successful men of the world have used their imagination\; they think ahead and create their mental picture in all its details, filling in here, adding a little there, altering this a bit and that a bit, but steadily building - steadily building.",
      author: "Robert Collier"
    }, {
      quote: "Every man has his own destiny\: the only imperative is to follow it, to accept it, no matter where it leads him.",
      author: "Henry Miller"
    }

  ]; //end allQuotes array
  
  function randomNumber(){
    return Number(Math.floor(Math.random()*allQuotes.length));
  }
  
  function setContent(){
    var randomIndex = randomNumber();
    $('#quote').text(allQuotes[randomIndex].quote);
    $('#author').text('~' + allQuotes[randomIndex].author);
  }
  
  $('body').on('load', setContent());
  $('#inspireButton').on('click', function(){
    setContent();
  });
}); //end ready