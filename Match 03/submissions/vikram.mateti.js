function solution(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    
    let str1 = a.split('').sort().join('');

    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        return true 
    } 
        else { return false 
        }
    }