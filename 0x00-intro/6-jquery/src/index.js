import $ from 'jquery';

$('body').append('<h1></h1>'); 

let displayVals = ["Holberton School", "HBTN"]
let count = 0

function changeText() {
  $('h1').text(displayVals[count]);
    count < 1 ? count++ : count = 0;
}
setInterval(changeText, 2000);
