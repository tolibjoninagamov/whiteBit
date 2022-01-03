// let a = 18;
// while(a=1)
// {
//   +prompt("vam tochno 18+")
//   if(a==18){
//     alert("you can enter");
//   }
//   else if(a<18){

//   }
// }
let up = document.querySelector('.up');
window.onscroll = function(){
    up.classList.toggle('show', window.scrollY >= 1000);
}
up.onclick = function(){
    window.scrollTo({behavior: 'smooth', top: 0});
}

