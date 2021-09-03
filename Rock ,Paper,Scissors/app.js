//console.log("hiii")
let computerscore=0;
let userscore=0;
let userscore_span=document.getElementById('user1-score');
let computerscore_span=document.getElementById('user2-score');
const score_div=document.querySelector('.boardy');
const r_div=document.getElementById('r');
const p_div=document.getElementById('p');
const s_div=document.getElementById('s');
var rs_div=document.querySelector(".res > p");
//console.log(rs_div)

function conv(a)
{
    if (a=='r') return "Rock"
    if (a=="p") return "Paper"
    return "Scissors"
}

function get_computerchoice()
{
    const s=['r','p','s'];
    computerchoice=Math.floor(Math.random()*3)
    return s[computerchoice]
}
function win(u,c){
    userscore++;
    userscore_span.innerHTML=userscore ;
    computerscore_span.innerHTML=computerscore;
    //rs_div.innerHTML="hiii"
    rs_div.innerHTML= conv(u) +"  Beats " + conv(c)+" You WON 🔥!!";


}
function lose(u,c){computerscore++;
    computerscore_span.innerHTML= computerscore;
    userscore_span.innerHTML=userscore;
    rs_div.innerHTML=conv(c) +"  Beats" + conv(u)+ " You LOST 💩 ";


}
function draw(u,c){rs_div.innerHTML="Its Draw😿!!!!";}
function  game(userchoice)
{
    const computerchoice=get_computerchoice();
    switch( userchoice+computerchoice)
    {
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userchoice,computerchoice);
            break;
        case 'rp':
        case 'rs':
        case 'ps':
           lose(userchoice,computerchoice);
            break;

        case 'pr':
        case 'sr':
        case 'sp':
            win(userchoice,computerchoice);
            break;

    }

}

function main()
{
    r_div.addEventListener('click',function()
{
   game("r")
}
)
s_div.addEventListener('click',function()
{
    game("s")
}
)
p_div.addEventListener('click',function()
{
    game("p")
}
)
}
main()
