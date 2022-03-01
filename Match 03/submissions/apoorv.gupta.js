
function solution(a, b) {
    let lengtha= a.length;
    let lengthb = b.length;
    if(lengtha !== lengthb) return false;
    a= a.split("").sort();
    b=b.split("").sort();
    //for checking input contains any character other than alphabet
    for(let j=0;j<a.length;j++){
        if( a[j].toUpperCase() === a[j].toLowerCase() || b[j].toUpperCase() === b[j].toLowerCase() )  return false;
    }
    console.log(a,b) // to dry-check
    for(let i=0;i<lengtha;i++){   
        if(a[i]!==b[i]) return false;
    }
    return true;
  }