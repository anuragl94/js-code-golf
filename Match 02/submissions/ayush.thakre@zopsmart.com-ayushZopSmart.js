//generating redundant lyrics
const getRedundantLyrics = (str) => {
  let lyricsArr = str.split("\n").join(", ").split(", ");

  const lyricsFreq = {};
  const lyricsTOReplace = new Set();

  lyricsArr.map((lyric) => {
    if (lyricsFreq[lyric]) {
      lyricsFreq[lyric]++;
      lyricsTOReplace.add(lyric);
    } else lyricsFreq[lyric] = 1;
  });

  return Array.from(lyricsTOReplace);
};

//compressing  original lyrics string according to redundant lyrics
const compressStr = (str) => {
  const lyricsTOReplace = getRedundantLyrics(str);
  lyricsTOReplace.map((lyric, index) => {
    const regEx = new RegExp(lyric, "g");
    str = str.replace(regEx, index);
  });

  return str;
};

//uncompressing lyrics to original lyrics
const extractStr = (compressedStr, redundantLyrics) => {
  redundantLyrics.map((lyric, index) => {
    const regEx = new RegExp(index, "g");
    compressedStr = compressedStr.replace(regEx, lyric);
  });

  return compressedStr;
};
