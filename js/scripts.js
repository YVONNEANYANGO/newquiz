function answer(event){

  var questionOne =$("input:radio[name=answer1]:checked").val();
  var questionTwo =$("input:radio[name=answer2]:checked").val();
  var questionThree =$("input:radio[name=answer3]:checked").val();
  var questionFour =$("input:radio[name=answer4]:checked").val();
  var questionFive =$("input:radio[name=answer5]:checked").val();
  var questionSix =$("input:radio[name=answer6]:checked").val();
  var fetch =0;




if (questionOne=="Makes debugging easier") {
  fetch +=10;
}

if (questionTwo=="Character") {
  fetch +=10;
}

if (questionThree=="A box that allows users to enter their inputs by providing a text box") {
 fetch +=10;
}

if (questionFour=="user interface") {
  fetch +=10;
}

if (questionFive=="Returns true if the argument is not a number otherwise it is false") {
  fetch +=10;
}

if (questionSix=="//") {
  fetch +=10;
}




alert((fetch) + "%");
event.preventDefault()
}
