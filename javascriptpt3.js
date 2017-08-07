var myGamePiece;
var myGameMale1;
var myGameMale2;
var myGameMale3;
var myGameMale4;
var myGameMale5;
var myGameMale6;
var myBackground;
var isitStart = 0;
var canvasW;
var canvasH;
var myGP;

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = document.body.clientWidth;
      this.canvas.height = this.canvas.width * 0.35;
      canvasW = this.canvas.width;
      canvasH = this.canvas.height;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
      console.log("I am a ready canvas");
      },
  clear : function() {
      this.context = this.canvas.getContext("2d");
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
  }
};

function startGame(){
  console.log("we've started the game");
  myBackground = new component(canvasW, canvasH, "TitlePage.png", 0, 0, "image");
  updateBackground();
  myGameArea.start();
}


function gameoption(gender)
{
  if (gender == "FEMALE")
  {
    console.log("Entered Female");
    isitStart = 1;
    myBackground = new component(canvasW, canvasH, "office2.jpg", 0, 0, "image");
    console.log("my background is office2");
    updateBackground();
  }
  else if (gender == "MALE") {
    console.log("Entered Male");
    isitStart = 2;
    myBackground = new component(canvasW, canvasH, "hospital.jpg", 0, 0, 'image');
    updateBackground();
  }
  else{
    var choose = Math.random();
    if(choose <= 0.5)
    {
      isitStart = 1;
      myBackground = new component(canvasW, canvasH, "office2.jpg", 0, 0, "image");
      console.log("my background is office2");
      updateBackground();
    }
    else
    {
      console.log("Entered Male");
      isitStart = 2;
      myBackground = new component(canvasW, canvasH, "hospital.jpg", 0, 0, 'image');
      updateBackground();
    }
  }
}

function goToOffice(){
  myGameMale1 = new component(45, 70, "myGameMale1.png", 138, 176, "image");
  myGameMale2 = new component(50, 70, "myGameMale2.png", 138, 257, "image");
  myGameMale3 = new component(60, 70, "myGameMale3.png", 265, 176, "image");
  myGameMale5 = new component(55, 70, "myGameMale4.png", 395, 257, "image");
  myGameMale6 = new component(45, 70, "myGameMale6.png", 395, 176, "image");
  myGamePiece = new component(45, 70, "maincharacter.png", 245, 199, "image");
  couch = new component(120, 130, "couch.png", 640, 110, "image");
  printer = new component(110, 100, "printer.png", 881, 229, "image");

  myGameMale1.update();
  myGameMale3.update();
  myGameMale6.update();
  couch.update();
  myGamePiece.update();
  myGameMale2.update();
  myGameMale5.update();
  printer.update();
//  femalegame();
}

function updateAfterMove(){
  myBackground.update();
  myGameMale1.update();
  myGameMale3.update();
  myGameMale6.update();
  couch.update();
  myGamePiece.update();
  myGameMale2.update();
  myGameMale5.update();
  printer.update();
}

function goToHospital(){

}

function updateBackground() {
  console.log("updating background");
  console.log(isitStart);
  myGameArea.clear();
  if(isitStart == 0) // show office
  {
    console.log("we've entered 0");
    myBackground.update();
  }
  if(isitStart == 1) // start page
  {
    myBackground.update();
    goToOffice();
  }
  if (isitStart == 2) // show hospital
  {
    myBackground.update();
    goToHospital();
  }
}

function femalegame(){

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

function moveup() {
    if((myGamePiece.y - 3) > 154)
    {
      myGamePiece.y += -3;
    }
    updateAfterMove();
}

function movedown() {
    if((myGamePiece.y + 3) < canvasH)
    {
      myGamePiece.y += 3;
    }
    updateAfterMove();
}

function moveleft() {
    if((myGamePiece.x - 3) > 0)
    {
      myGamePiece.x += -3;
    }
    updateAfterMove();
}

function moveright() {
    if((myGamePiece.x + 3) < canvasW)
    {
      myGamePiece.x += 3;
    }
    updateAfterMove();
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}


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
//  console.log(event.keyCode);
}, false);
