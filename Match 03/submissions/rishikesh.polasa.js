const isAlpha = str => /^[a-zA-Z]*$/.test(str);

function solution(a, b) {
  // console.log(a,b);
  if(a.length!==b.length){
    return false;
  }
  var map1={},map2={};
  for(let i=0;i<a.length;i++){
    if(!isAlpha(a[i])){
      return false;
    }else{
      let char =a.charAt(i);
      if(map1[char]){
        let val=map1[char];
        val++;
        // console.log(char,val);
        map1[char]=val;
      }else{
        map1[char]=1;
      }
    }
  }
  for(let i=0;i<b.length;i++){
    if(!isAlpha(b[i])){
      return false;
    }else{
      let char =b.charAt(i);
      if(map2[char]){
        let val=map1[char];
        val++;
        map2[char]=val;
      }else{
        map2[char]=1;
      }
    }
  }
  for(let i=0;i<map1.size;i++){
    if(map1[i]!=map2){
      return false;
    }
  }
  // console.log(map1,map2);
  return true;
}