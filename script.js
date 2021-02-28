function sum(a,b)
{
    return a+b;
}
function diff(a,b){
    return a-b;
}
function mulp(a,b){
    return a*b;
}
function div(a,b)
{
    if(b>0)
    return a/b;
    else
    return "Divide by zero error";
}
function calculate(a,b,sum,diff,mulp,div){
    return sum(a,b)+" "+diff(a,b)+" "+mulp(a,b)+" "+div(a,b);
    
    
}
console.log(calculate(5,6,sum,diff,mulp,div));