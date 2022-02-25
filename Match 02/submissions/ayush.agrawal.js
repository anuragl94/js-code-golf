function solution() {

    let lyrics = `when i find myself in times of trouble
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

    let lines = lyrics.split("\n");
    let lyric = [];

    lines.map(e => {
        lyric.push(...e.split(", "));
    });
    let freq = {};
    let arr = [];
    lyric.forEach(function(value, index) {
        if (!freq[value]) {
            arr.push(value);
        }
        freq[value] = freq[value] || [];
        freq[value].push(index);

    });

    console.log(freq);

    let p = arr[0] + '\n' +
        arr[1] + '\n' +
        arr[2] + ', ' + arr[3] + '\n' +
        arr[4] + '\n' +
        arr[5] + '\n' +
        arr[2] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[6] + ', ' + arr[3] + '\n' +
        arr[7] + '\n' +
        arr[8] + '\n' +
        arr[9] + ', ' + arr[3] + '\n' +
        arr[10] + '\n' +
        arr[11] + '\n' +
        arr[9] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[12] + ', ' + arr[9] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[6] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[13] + ', ' + arr[3] + ', ' +
        arr[12] + ', ' + arr[3] + '\n' +
        arr[6] + ', ' + arr[3] + '\n' +
        arr[14] + '\n' +
        arr[15] + '\n' +
        arr[16] + ', ' + arr[3] + '\n' +
        arr[17] + '\n' +
        arr[1] + '\n' +
        arr[2] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[13] + ', ' + arr[3] + ', ' + arr[12] + ', ' + arr[3] + '\n' +
        arr[18] + ', ' + arr[9] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[3] + '\n' +
        arr[3] + ', ' + arr[12] + ', ' + arr[3] + '\n' +
        arr[6] + ', ' + arr[3] + '\n';
    return p;
}