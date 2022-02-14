function solution(a, b) {

  let arr1=[...a];
  let arr2=[...b];
  arr1.sort();
  arr2.sort();
  
  for(let i=0;i<arr1.length;i++)
  {
    if(arr1[i]!=arr2[i])
      return false
  }
  return true;
}