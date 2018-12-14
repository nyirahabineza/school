//Declaration of variables
var arrays = [firstnumber, secondnumber, thirdnumber];
var a = function(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
};

var b = function(secondnumber, thirdnumber) {
  return secondnumber + thirdnumber;
};

var c = function(firstnumber, thirdnumber) {
  return firstnumber + thirdnumber;
};

function check() {
  var data = [];
  var firstnumber = parseInt(document.getElementById("one").value);
  var secondnumber = parseInt(document.getElementById("two").value);
  var thirdnumber = parseInt(document.getElementById("three").value);
  var newData = data.concat([firstnumber, secondnumber, thirdnumber]);

  var text;
  if (
    (firstnumber + secondnumber <= thirdnumber &&
      secondnumber + firstnumber <= thirdnumber) ||
    (firstnumber + thirdnumber <= secondnumber &&
      thirdnumber + firstnumber <= secondnumber) ||
    (secondnumber + thirdnumber <= firstnumber &&
      thirdnumber + secondnumber <= firstnumber)
  ) {
    text = "it is not a triangle";
  } else if (firstnumber === secondnumber && secondnumber === thirdnumber) {
    text = "Equilaterial Triangle.";
  } else if (
    firstnumber === secondnumber ||
    firstnumber === thirdnumber ||
    secondnumber === thirdnumber
  ) {
    text = "Isoscele Triangle.";
  }
  //Isoscele Triangle
  else if (firstnumber !== secondnumber && secondnumber !== thirdnumber) {
    //     (firstnumber + secondnumber > thirdnumber &&
    //       secondnumber + firstnumber > thirdnumber) ||
    //     (firstnumber + thirdnumber > secondnumber &&
    //       thirdnumber + firstnumber > secondSide) ||
    //     (secondnumber + thirdnumber > firstnumber &&
    //       secondnumber + thirdnumber > firstnumber)
    //   ) {
    text = "Scalene Triangle.";
  }
  //Scalene Triangle
  else {
    text = "Not a Triangle.";
  }
  document.getElementById("demo").innerHTML = text;
}
