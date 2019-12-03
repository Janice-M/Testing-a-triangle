function tritest(Fside,Sside,lside) {
var first = document.getElementById('Fside').value;
var second = document.getElementById('Sside').value;
var last = document.getElementById('lside').value;

if(Fside===Sside || Sside===lside || Fside===lside) {
    alert ("This is an equalateral triangle");
}
else
    alert ('This is either an isoceles or a scalene triangle');
}
