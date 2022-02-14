function solution(a, b) {
    if (a.length != b.length)
        return false;
   
    // Sort both strings
    return a.split('').sort().join()==b.split('').sort().join();
}