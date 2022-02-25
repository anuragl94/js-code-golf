const fizzBuzz= (o) => {
    for(let z=1;z<=o;z++){
        if(z%3==0){
            console.log("Fizz")
        }
        if(z%5==0){
            console.log("Buzz")
        }
        if(z%3&&z%5==0){
            console.log("FizzBuzz")
        }
        if(z%5!=0&&z%3!=0){
            console.log(z)
        }
    }
};