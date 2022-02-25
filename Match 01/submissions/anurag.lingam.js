function solution(num) {
  let response = "";
  for (var i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      response += "FizzBuzz";
    } else if (i % 3 == 0) {
      response += "Fizz";
    } else if (i % 5 == 0) {
      response += "Buzz";
    } else {
      response += `${i}`;
    }
    response += "\n";
  }
  return response;
}