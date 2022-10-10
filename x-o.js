let div = document.querySelectorAll('section div');
let popup = document.querySelectorAll('.popup .text')[0];
let audio = document.getElementById('a')
let  swap = ['X' , 'O'];
let winner = '';
let win = [
    [0,4,8],
    [0,3,6],
    [0,1,2],
    [2,4,6],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [6,7,8]
];
console.log(popup)

div.forEach(function(ele){
    ele.onclick = function(){
        ele.innerHTML = swap[0];
        swap.reverse();
        ele.onclick = function(e){
            e.preventDefault();
        }
        check();
    }
})

function check(){
    for (let i = 0 ; i<win.length; i++){
        if(div[win[i][0]].innerHTML=='X' && div[win[i][1]].innerHTML=='X' && div[win[i][2]].innerHTML=='X'){
            winner = 'X'; 
            console.log(winner);
            popup.parentElement.style.display = 'flex';
            popup.innerHTML = `${winner} is win`;
            audio.src="JKL83NH-video-game-win.mp3";
            audio.play();
        }
        else if(div[win[i][0]].innerHTML=='O' && div[win[i][1]].innerHTML=='O' && div[win[i][2]].innerHTML=='O'){
            winner = 'O';
            console.log('O');
            popup.parentElement.style.display = 'flex';
            popup.innerHTML = `${winner} is win`;
            audio.src="JKL83NH-video-game-win.mp3";
            audio.play();
        }
        else{
            console.log('no');
        }
    } 
}
