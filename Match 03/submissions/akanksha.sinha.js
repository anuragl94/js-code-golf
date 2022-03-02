function solution(str1, str2) {
    let sChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (sChar.test(str1) || sChar.test(str2)) return false;
    
    return str1.split("").sort().join("") == str2.split("").sort().join("");
  }
  