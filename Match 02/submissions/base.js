function re(str) {
  reg=/let it be/ig;
  reg2=/words of wisdom/ig;
  reg3=/there will be an answer/ig;
  reg4=/there is still a/ig;

  str=str.replace(reg,'#');
  str=str.replace(reg2,'*');
  str=str.replace(reg3,"%");
  str=str.replace(reg4,"&");

  return str;
}
re(`when i find myself in times of trouble
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
whisper words of wisdom, let it be`);
