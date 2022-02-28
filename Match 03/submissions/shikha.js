let pattern = /[a-zA-Z]/g;
function solution(param1,param2){
    if(param1.length === param2.length){
        if(pattern.test(param1) && pattern.test(param2)){
            return param1.toLowerCase().split("").sort().join("") === param2.toLowerCase().split("").sort().join("");
        }
    }
    return false;
}