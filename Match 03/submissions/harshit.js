if (/^[a-zA-Z]/.test(a)) {
    
 
 
function solution(a, b) {
    let n1=a.length;
      let n2=a.length;
      if(n1!=n2)
      return false;
      a.split('').sort();
      b.split('').sort();
      for(let i=0;i<n1;i++)
      {
          if(a[i]!=b[i])
              return false;
      return true;
      }
  }
}
return false