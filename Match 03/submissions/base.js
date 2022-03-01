function solution(a, b) {
  if(!a.match(/^[A-Za-z]+$/) || !b.match(/^[A-Za-z]+$/)) return false;
  a=a.split("").sort().join("");
  b=b.split("").sort().join("");
 
   return a.localeCompare(b)===0;
   
   
}