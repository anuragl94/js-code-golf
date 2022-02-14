function solution(a, b) {
  if(a.length !=b.length){return false;}
  var flag=0,x=a.toUpperCase().split("").sort(),y=b.toUpperCase().split("").sort();
    for(let i=0;i<x.length;i++){
      if(x[i]==y[i] && x[i]>='A' && x[i]<='Z'&& y[i]>='A'&& y[i]<='Z'){continue;}
      else{flag=1;break;}}
  if(flag==0){return true;}
    return false;
}
console.log('bhanu')