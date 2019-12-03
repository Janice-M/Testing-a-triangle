function tritest(first, second,last) {

var first = document.getElementById('Fside').value;
var second = document.getElementById('Sside').value;
var last = document.getElementById('lside').value;

if( first=== second || second===last || first=== last) {
    alert ("This is an equalateral triangle");
}
else
    alert ('This is either an isoceles or a scalene triangle');
}
