function solution(a, b) {
    if(a.length !== b.length){
       return false;
    }
    var regExp = /[a-zA-Z]/g;
    if(regExp.test(a)==false || regExp.test(b)==false)
        return false;
    let str1 = a.split('').sort().join('').toLowerCase();
    let str2 = b.split('').sort().join('').toLowerCase();
    return str1===str2?true:false;
  }