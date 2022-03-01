function test(st){
for(var i=0;i<st.length;i++){
if(st.charCodeAt(i)<65 ||( st.charCodeAt(i)>90 && st.charCodeAt(i)<97) ||st.charCodeAt(i)>122){
return false;} 
}return true; 
}function solution(a, b) {
console.log(a,b);
res=false; 
if(test(a) && test(b)){ 
testing1=a.split("").sort().join('');
testing2=b.split("").sort().join('');
if(testing1===testing2){
res=true; 
}}return res;
}