const fizzBuzz= (o) => {
    for(let z=1;z<=o;z++){
        if(z%3==0){
            return "Fizz"
        }
        if(z%5==0){
            return "Buzz"
        }
        if(z%3&&z%5==0){
            return "FizzBuzz"
        }
        if(z%5!=0&&z%3!=0){
            return z
        }
    }
};