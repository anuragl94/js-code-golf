function solution() {
let str =  `when i find myself in times of trouble
mother mary comes to me
speaking words of wisdom, let it be
and in my hour of darkness
she is standing right in front of me
speaking words of wisdom, let it be
let it be, let it be
let it be, let it be
whisper words of wisdom, let it be
and when the broken-hearted people
living in the world agree
there will be an answer, let it be
for though they may be parted
there is still a chance that they will see
there will be an answer, let it be
let it be, let it be
let it be, let it be
yeah, there will be an answer, let it be
let it be, let it be
let it be, let it be
whisper words of wisdom, let it be
let it be, let it be
ah, let it be, yeah, let it be
whisper words of wisdom, let it be
and when the night is cloudy
there is still a light that shines on me
shine on until tomorrow, let it be
i wake up to the sound of music,
mother mary comes to me
speaking words of wisdom, let it be
let it be, let it be
let it be, yeah, let it be
oh, there will be an answer, let it be
let it be, let it be
let it be, yeah, let it be
whisper words of wisdom, let it be`;

let newchar=' ';
str = str.split(',').join(newchar);
str = str.split('\n').join(newchar);
let arr = str.split(" ");

let set = new Set();
for(let i=0;i<arr.length;i++)
set.add(arr[i]);
console.log(set);

let answer=""

set.forEach((element,idx)=>{
  answer+=element
  if(idx!=set.length-1)
  answer+=" ";  
})
console.log(answer)
return answer
}