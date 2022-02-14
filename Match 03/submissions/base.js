function solution(a, b) {
  var x=Array.from(a.toUpperCase()).sort(),y=Array.from(b.toUpperCase()).sort(),flag=0;
  if(x.length==y.length){
    for(var i=0;i<x.length;i++)
         if(x[i]==y[i] && x[i]>='A' && x[i]<='Z' && y[i]>='A' && y[i]<='Z')
         continue;
        else{flag=1;break;};
  }else flag=1;
  if(flag==1) return false;else return true;
}