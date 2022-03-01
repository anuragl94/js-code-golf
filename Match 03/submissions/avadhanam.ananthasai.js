function solution(a,b)
{
    for(let l of a.toUpperCase())
    {
        if(l.charCodeAt()%65>25)
            return false;
    }
    for(let l of b.toUpperCase())
    {
        if(l.charCodeAt()%65>25)
            return false;
    }
    a=a.split("").sort().join();
    b=b.split("").sort().join();
    return a==b;
}