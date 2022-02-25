function solution(word1, word2) {
    if (word1.length != word2.length) {
        console.log("not equal");
        return false;
    }
    var regExp = /^[a-zA-Z]+$/;

    if (regExp.test(word1) == false) {
        console.log("regex 1");
        return false;
    }
    if (regExp.test(word2) == false) {
        console.log("regex 2");
        return false;
    }
    let map = {};

    for (let i = 0; i < word1.length; i++) {
        map[word1[i]]++;
    }
    for (let i = 0; i < word2.length; i++) {
        if (word2[i] in map)
            map[word2[i]]--;
        else {
            console.log("mismatch");
            return false;
        }
    }

    return true;
}
