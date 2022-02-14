function solution(a, b) {
  
  if(a.length!=b.length)
    return false

  let map1 = {};

  console.log(map1);

  for(let i=0;i<a.length;i++)
  {
    if(a[i] in map1)
    {
      map1[a[i]]=map1[a[i]]+1;
    }
    else
      map1[a[i]]=1;
  }

  console.log(map1);
  
  for(let i=0;i<b.length;i++)
  {
    if(b[i] in map1)
    {
      map1[b[i]]=map1[b[i]]-1;
    }
  }
  
  
  for(const key in map1)
  {
    if(map1[key]!=0)
    return false;
  }

  
  return true;

}