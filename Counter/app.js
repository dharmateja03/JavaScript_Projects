var c=0;
let val=document.querySelector(".count");
var i=document.querySelector(".i")
let r=document.querySelector(".r")
let d = document.querySelector(".d")


i.addEventListener("click",function()
{
    //c=6;
    c++;
    val.textContent=c;
   
    if(c>0)
    {
        val.style.color="green"
    }
})

d.addEventListener("click",function()
{
    //c=6;
    if(c<0)
    {
       val.style.color="red"
    }
    c-=1;
    val.textContent=c;
})

r.addEventListener("click",function()
{
    //c=6;
    c=0;
    val.textContent=c;
})
