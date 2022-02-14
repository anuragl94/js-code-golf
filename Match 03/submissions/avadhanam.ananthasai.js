function solution(a,b)
{
    for(const l of a.toUpperCase())
    {
        if(l.charCodeAt()%65>25)
            return false;
    }
    for(const l of b.toUpperCase())
    {
        if(l.charCodeAt()%65>25)
            return false;
    }
    a=a.split("").sort().join();
    b=b.split("").sort().join();
    return a==b;
}