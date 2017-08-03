var gender = "";
var name = "";
//need to create a separate user that contains name and gender.
function main{
  input type="text" id="input1";
  name = document.getElementById("input1").value;
  input type = "text" id = "input2";
  gender = document.getElementById("input2").value;
  if(gender == "female")
  {
    femalegame()
  }
  else if(gender == "male")
  {
    malegame();
  }
  else if(gender == "neither")
  {
    var choose =  0;
    choose = Math.random();
    if(choose <= 0.5)
    {
      femalegame();
    }
    else
    {
      malegame();
    }
  }
}
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

function background(changeto){

}

function display(text){

}
