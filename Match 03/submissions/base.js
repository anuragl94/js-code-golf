function solution(a, b) {
  let flag=0;
  var x=a.toUpperCase().split("").sort(),y=b.toUpperCase().split("").sort();
  if (x.length==y.length){
    for(let i=0;i<x.length;i++){
      if(x[i]==y[i] && x[i]>='A' && x[i]<='Z'&& y[i]>='A'&& y[i]<='Z'){
        continue;
      }
      else{flag=1;break;}}
  }
  if(flag==1){return true;}
    return false;
}