var a=10;
timer(a);
function timer(a){
    if(a==0)
{
console.log("Happy Independence Day")
}
else
{
    console.log(a);
    a--;
    setTimeout(()=>{},1000);
    timer(a);  
}
}  
