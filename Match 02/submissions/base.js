function solution(){
  let string=`when i find myself in times of trouble
  mother mary comes to me
  speaking words of wisdom,
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
  whisper words of wisdom, let it be`
  let p= string.split("\n");
  let k=[];
  p.map(item=>{
      let abc=item.split(",");
      k.push(...abc);
  })
  //console.log(k);
  function getFrequency(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string[i];
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }

  return freq;
  };
function replaceAll(string1, search, replace) {
  return string1.split(search).join(replace);
  }
  let c=getFrequency(k);
  //console.log(c);
  freq={};
  let i=1;
  for (const item in c) {
  if(c[item]>1&& item!='')
    {
      freq[i]=item;
      //console.log(item);
      //console.log(string);
      string=replaceAll(string,item,i);
      i++;
    }
}
  console.log(freq);
  return string;
  
}
