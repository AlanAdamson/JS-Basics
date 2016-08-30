//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if(name === 'Tyler') {
    return true;
  }
  return false;
}

//G: Perfecto;

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName () {
  var name = prompt("What is your name?");
  return name;
}

//G: You could simplify this down to just:
//G: return prompt("What is your name?");

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


function welcome(){
  var name = getName();
  alert('Welcome, ' + name);
}

//G: Perfecto;

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
    //arguments are the things being asked for something to be given to it?
    //paramaters are the things that are give to the arguments?

//G: A parameter is the variable which is part of the function’s signature (function declaration).
//G: Arguments are what you pass into a function for those parameters when the function is invoked.
//G: It's an easy concept to understand but articulating it is a little bit harder.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here
    /*
    0
    null
    undefined
    NaN
    false
    ""
    */

//G: Nice. Perfect.

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return 'Alan';
  }
//G: That's an easy one :)


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;
  
  //G: Yep!

//Now alert the result of invoking newMyName

  alert(newMyName());
  
  //G: Got it.

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function() {
      return 'Alan';
    }
  }
  //G: Exactly right!


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();
  //G: Yep!
//Now invoke innerFn.

//G: Oh no you forgot to invoke innerFn! Don't worry, I got you.

innerFn();

//G: :)
