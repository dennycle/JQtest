var sentence = prompt("Enter a sentence");
var stringLength = sentence.length;
var firstChar = sentence.charAt(0);
var lastChar = sentence.charAt(stringLength - 1);
alert((firstChar.toUpperCase()) + (lastChar.toUpperCase()));
alert((lastChar.toUpperCase()) + (firstChar.toUpperCase()));
var third = sentence + (lastChar.toUpperCase()) + (firstChar.toUpperCase()) + ".";
alert(third);
var halfLength = parseInt((stringLength) / 2);
alert(halfLength);
var fourth = sentence.charAt(halfLength-0) + third;
alert(fourth);
var splitString = fourth.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
alert(joinArray);


$(document).ready(function() {
  $("img").click(function() {
    alert("This is a picture.");
  });
});
