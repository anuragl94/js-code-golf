const sort_string=(word)=>(word.split("").sort((i,j)=>i.charCodeAt()-j.charCodeAt())).join();
function check(word)
{
    for(const letter of word)
    {
        if(letter.toUpperCase().charCodeAt()<65 || letter.toUpperCase().charCodeAt()>90)
        {
            return false;
        }
    }
    return true;
}
const solution=(a, b)=> (check(a) && check(b))?sort_string(a)==sort_string(b):false;