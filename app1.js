const p1={
   score:0,
   button:document.querySelector('#p1button'),
   display: document.querySelector('#p1display')
}
const p2={
   score:0,
   button:document.querySelector('#p2button'),
   display:document.querySelector('#p2display')
}

const resetbutton=document.querySelector('#reset')

const winningscoreselect=document.querySelector('#playto');

let winscore=3;
let isgameover=false;

function updateScores(player,opponent){
   if(!isgameover){
      player.score += 1;
      if(player.score===winscore){
         isgameover=true;
         player.display.classList.add('has-text-success');
         opponent.display.classList.add('has-text-danger');
         player.button.disabled=true;
         opponent.button.disabled=true;
      }
      player.display.textContent =player.score;
   }
}
p1.button.addEventListener('click',function(){
 updateScores(p1,p2)
})
p2.button.addEventListener('click',function(){
 updateScores(p2,p1)
   
 })

 winningscoreselect.addEventListener('change',function(){
    winscore = parseInt(this.value);
    reset();
 })
 resetbutton.addEventListener('click',reset)
 function reset(){ 
   isgameover = false;
   for (let p of [p1, p2]) {
       p.score = 0;
       p.display.textContent = 0;
       p.display.classList.remove('has-text-success', 'has-text-danger');
       p.button.disabled = false;
   }

 }