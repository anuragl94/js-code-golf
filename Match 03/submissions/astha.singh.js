function solution(a, b) {
function isLetter(str){
return (/^[A-Za-z]+$/.test(str));}
var x=a.split('').sort().join(),y=b.split('').sort().join();
return (a.length==b.length && isLetter(a) && isLetter(b) && x===y);}
  