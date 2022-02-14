function solution(a, b) {

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let bool1 = specialChars.test(a);
  let bool2 = specialChars.test(b);
  if(bool1 ||   bool2)
    return false;
  let arr1=[...a].join("");
  let arr2=[...b].join("");
  return !arr1.localeCompare(arr2)
} 