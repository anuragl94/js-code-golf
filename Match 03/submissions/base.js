function solution(a, b) {
  var x=(Array.from(a.toUpperCase()).sort()).join(),y=(Array.from(b.toUpperCase()).sort()).join();
  if(x===y)
     return true;
  return false;
}