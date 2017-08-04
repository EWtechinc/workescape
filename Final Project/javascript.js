var myGamePiece;
var myGameMale1;
var myGameMale2;
var myGameMale3;
var myGameMale4;
var myGameMale5;
var myGameMale6;
var myBackground;
var myStartPage;
var isitStart = 1;
//var myScore;


function startGame() {
    myGameMale1 = new component(45, 70, "myGameMale1.png", 108, 156, "image");
    myGameMale2 = new component(50, 70, "myGameMale2.png", 108, 237, "image");
    myGameMale3 = new component(60, 70, "myGameMale3.png", 235, 156, "image");
    myGameMale5 = new component(55, 70, "myGameMale4.png", 365, 237, "image");
    myGameMale6 = new component(45, 70, "myGameMale6.png", 365, 156, "image");
    myGamePiece = new component(45, 70, "maincharacter.png", 245, 199, "image");
    couch = new component(90, 100, "couch.png", 440, 110, "image");
    printer = new component(90, 80, "printer.png", 582, 199, "image");
    myStartPage = new component(656, 300, "TitlePage.png",0, 0, "image");
    myBackground = new component(656, 300, "office2.jpg", 0, 0, "image");
    //myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 656;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function gameoption(gender)
{
  if (gender == "FEMALE")
  {
    console.log("Entered Female");
  }
  else if (gender == "MALE") {
    console.log("Entered Male");
  }
  else{
    var choose = Math.random();
    if(choose <= 0.5)
    {
      console.log("Entered Female");
      //femalegame();
    }
    else
    {
      console.log("Entered Male");
      //malegame();
    }
  }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        }
        // if (type == "text") {
        //   ctx.font = this.width + " " + this.height;
        //   ctx.fillStyle = color;
        //   ctx.fillText(this.text, this.x, this.y);
        // }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function startingBackground(num){
  isitStart = num;
}

function updateGameArea() {

    if(isitStart == 1)
    {
      myGameArea.clear();
      myStartPage.update();
    }
// have to draw the items in order or else things lay over each other
    else{
    myGameArea.clear();
    //myGameArea.frameNo += 1;
//    myBackground.newPos();
    myBackground.update();
//    myGamePiece.newPos();
    //myScore.text="SCORE: " + myGameArea.frameNo;
    //myScore.update();
    myGameMale1.update();
    myGameMale3.update();
    myGameMale6.update();
    couch.update();
    myGamePiece.update();
    myGameMale2.update();
    myGameMale5.update();
    printer.update();
  }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.y += -3;
}

function movedown() {
    myGamePiece.y += 3;
}

function moveleft() {
    myGamePiece.x += -3;
}

function moveright() {
    myGamePiece.x += 3;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
/*
function femalegame(){
  print("You were just hired at EW Tech Industries. You walk in the building with high hopes. Just then a man walks in front of you");
  print("Richard: Hey, the name's Richard. Are you our new receptionist?");
  print("You were taken aback due to his comment.");
  print("Choose one answer: 'What's that supposed to mean' or 'No, I'm the new software project manager.'"); //button
  if(player chooses "What's that supposed to mean")
  {
    print("Richard: I didn't mean any offense. You're just the first girl to walk through those doors in years.");
  }
  else if(player chooses "No, I am the new software project manager")
  {
    print("Richard: Interesting... Anyway welcome to the team! We never had a girl before.");
  }
  print("'Did he just say I was the first girl to work here in a while?''");
  print("Behind Richard, you saw the rows of male workers, coding away behind their computers.");
  print("Richard lead you to your desk and pointed at a pile of papers stacked on your desk.");
  print("Richard: Here's the paperwork you need to get done by tonight.");
  print("You had a lot of questions, but you chose not to ask them.");
  var count = 0;
  var avoid = 0;
  var hour = 7;
  var min = 30;
  print("To interact with your coworkers, type in one of their name. ");
  print("To interact with object, type in Break Room or printer.");
  while((count != 5) || (hour == 18 && min == 30) )
  {
    print("Talk to:");
    print("Fanny"); //button
    print("Jerold"); //button
    print("Archibald"); //button
    print("Farquaad"); //button
    print("Buddy P."); //button
    print("Or use:");
    print("Break room"); //button
    print("Printer"); //button
    if(user input == "Fanny")
    {
      print("Fanny is the Junior Engineer that sat in front of you.")
      print("Fanny: You're the new product manager? I thought you'd be a muscular man. Guess I was worried for nothing!");
      print("'Surprise.. I'm not a man...''"); //button
      print("'You should be worried, because I'm in a higher position than yours, Junior Engineer'"); //button
      if(input == "Surprise.. I'm not a man...")
      {
        count ++;
      }
      else if(input == "You should be worried, because I'm in a higher position than yours, Junior Engineer")
      {
        avoid ++;
      }
    }
    else if(user input == "Jerold")
    {
      print("Jerold sits to your right.");
      print("Jerold: You doing anything tonight?");
      print("'Why do you ask?'"); //button
      print("'I don't think so.");  //button
      if(input == "Why do you ask?")
      {
        avoid ++;
      }
      else if(input == "I don't think so.")
      {
        count++;
      }
    }
    else if(user input == "Archibald" )
    {
      print("Archibald sits diagonally right from you.")
      print("Archibald: I have a date tonighttt, would you mind finishing my project for me so I could leave early?")
      print('')
    }
    else if(user input == "Farquaad")
    {

    }
    else if(user input == "Buddy P.")
    {

    }
    else if(user input == "Break room")
    {
      print("You sit on the couch and accidentally drop your phone in between the cushions.")
      print("You get up to try and move the cushion but Archibald moves you out of the way.")
      print("Move aside, I'll get your phone for you. Moving this couch is a man's job.")
      print("'I can do it myself.'")
    }
    else if(user input == "Printer")
    {

    }
  }
  if(count == 5 || count > 5)
  {
    print("You've failed to escape the work stereotypes.")
  }
  else {

  }
}

function malegame(){
}
*/

window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
    moveleft();
    console.log("x-pos; " + myGamePiece.x);
    console.log("y-pos; " + myGamePiece.y);
    break;

    case 38: // Up
    moveup();
    console.log("x-pos; " + myGamePiece.x);
    console.log("y-pos; " + myGamePiece.y);
    break;

    case 39: // Right
    moveright();
    console.log("x-pos; " + myGamePiece.x);
    console.log("y-pos; " + myGamePiece.y);
    break;

    case 40: // Down
    movedown();
    console.log("x-pos; " + myGamePiece.x);
    console.log("y-pos; " + myGamePiece.y);
    break;
  }
  console.log(event.keyCode);
}, false);
