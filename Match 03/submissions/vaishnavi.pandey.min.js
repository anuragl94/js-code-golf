function solution(a, b) {

    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    if (a.match(/^[a-zA-Z]+$/) && b.match(/^[a-zA-Z]+$/))
        return a.localeCompare(b) === 0
    else
        return false;
}