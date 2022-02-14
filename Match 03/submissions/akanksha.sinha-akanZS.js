function solution(str1, str2){
    let sChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if(sChar.test(str1) || sChar.test(str2)) return false;
    
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('')

    return (a === b)
}