function solution(a,b) {
    if(a.length!==b.length)
      return false;
    const s=/^[a-zA-Z]+$/;
    if(s.test(a)==false)
    {
      return false;
    }
    if(s.test(b)==false)
    {
      return false;
    }
    function getFrequency(string) {
      var freq = {};
      for (var i=0; i<string.length;i++) {
          var character = string.charAt(i);
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
      }
      return freq;
  };
    var map_a=getFrequency(a);
    for(var i=0;i<b.length;i++)
    {
      var character = b.charAt(i);
      if(map_a[character])
      {
        map_a[character]--;
      }
    }
    for (const item in map_a) {
      if(map_a[item]!=0)
        {
          return false;
        }
    }
    return true;
  } 