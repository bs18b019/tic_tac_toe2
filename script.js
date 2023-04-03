console.log("hello here");

let turn = "X"; 

play_turn = document.getElementById('heading')
let para1 = document.getElementById('box-1');
function run1(){
    if(para1.innerHTML==''){
        para1.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else {turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}

para1.addEventListener("click",run1);




let para2 = document.getElementById('box-2');
function run2(){
    if(para2.innerHTML==''){
        para2.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para2.addEventListener("click",run2);




let para3 = document.getElementById('box-3');
function run3(){
    if(para3.innerHTML==''){
        para3.innerHTML=turn;
        ans  = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para3.addEventListener("click",run3);


let para4 = document.getElementById('box-4');
function run4(){
    if(para4.innerHTML==''){
        para4.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para4.addEventListener("click",run4);




let para5 = document.getElementById('box-5');
function run5(){
    if(para5.innerHTML==''){
        para5.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para5.addEventListener("click",run5);



let para6 = document.getElementById('box-6');
function run6(){
    if(para6.innerHTML==''){
        para6.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para6.addEventListener("click",run6);



let para7 = document.getElementById('box-7');
function run7(){
    if(para7.innerHTML==''){
        para7.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para7.addEventListener("click",run7);


let para8 = document.getElementById('box-8');
function run8(){
    if(para8.innerHTML==''){
        para8.innerHTML=turn;
        ans = checkwin();
        if (!ans){draw();}
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
}
para8.addEventListener("click",run8);



let para9 = document.getElementById('box-9');
function run9(){
    if(para9.innerHTML==''){
        para9.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para9.addEventListener("click",run9);






let para10 = document.getElementById('box-10');
function run10(){
    if(para10.innerHTML==''){
        para10.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para10.addEventListener("click",run10);






let para11 = document.getElementById('box-11');
function run11(){
    if(para11.innerHTML==''){
        para11.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para11.addEventListener("click",run11);





let para12 = document.getElementById('box-12');
function run12(){
    if(para12.innerHTML==''){
        para12.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para12.addEventListener("click",run12);





let para13 = document.getElementById('box-13');
function run13(){
    if(para13.innerHTML==''){
        para13.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para13.addEventListener("click",run13);





let para14 = document.getElementById('box-14');
function run14(){
    if(para14.innerHTML==''){
        para14.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para14.addEventListener("click",run14);





let para15 = document.getElementById('box-15');
function run15(){
    if(para15.innerHTML==''){
        para15.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
    }
    
}
para15.addEventListener("click",run15);



let para16 = document.getElementById('box-16');
function run16(){
    if(para16.innerHTML==''){
        para16.innerHTML=turn;
        ans= checkwin();
        if (!ans){draw();}       
        if (turn=='X'){turn='0';}
        else{turn='X';}
        if (!ans){
            play_turn.innerHTML = "Turn of:-"+turn;}
        
    }
    
}
para16.addEventListener("click",run16);




//writting the function to check the win condition

let gridinput = document.getElementsByClassName('box');

console.log("the game grid input", gridinput);






function wait(){

}
//Need to write the checkwin function
function checkwin(){
    girdpattern = [
        [para1, para2, para3],
        [para2, para3, para4],
        [para5, para6, para7],
        [para6, para7, para8], 
        [para9, para10, para11],
        [para10, para11, para12],
        [para13, para14, para15],
        [para14, para15, para16], 
        [para1, para5, para9],
        [para5, para9, para13], 
        [para2, para6, para10], 
        [para6, para10, para14],
        [para3, para7, para11],
        [para7, para11, para15],
        [para4, para8, para12], 
        [para8, para12, para16],
        [para1, para6, para11],
        [para5, para10, para15], 
        [para9, para6, para3],
        [para13, para10, para7],
        [para2, para7, para12],
        [para6, para11, para16], 
        [para10, para7, para4],
        [para14, para11, para8]]

    won= ''

    const n = girdpattern.length;

    //checkig the win condition for X 
    for (let i = 0; i <n; i++) {
        v0 = girdpattern[i][0].innerHTML;
        v1 = girdpattern[i][1].innerHTML;
        v2 = girdpattern[i][2].innerHTML;
        if (v0=='X' & v1=='X' & v2=='X') {

            document.getElementById("heading").innerHTML = "X WON";


            // document.getElementById("winlogo").innerHTML = "X WON";

            // document.getElementById("winlogo").style.display = 'block';
            // console.log("X Won");
            return true
        }
    }

    //checking the win condition for 0

    for (let i = 0; i <n; i++) {
        v0 = girdpattern[i][0].innerHTML;
        v1 = girdpattern[i][1].innerHTML;
        v2 = girdpattern[i][2].innerHTML;
        if (v0=='0' & v1=='0' & v2=='0') {

            document.getElementById("heading").innerHTML = "0 WON";


            // document.getElementById("winlogo").innerHTML = "0 WON";

            // document.getElementById("winlogo").style.display = 'block';
            // console.log("0 Won");
            return true
        }
    }

    return false

}

function draw(){
    count = 0;
    li = [para1, para2, para3, para4, para5, para6, para7, para8, para9, para10, para11, para12, para13, para14, para15, para16];

    for (let i = 0; i <16; i++){
        if (li[i].innerHTML==''){
            count++;
        }
    }

    if (count==0){
        document.getElementById("winlogo").innerHTML = "Match Draw, Please reset to play again";

        document.getElementById("winlogo").style.display = 'block';

    }

}



function toggleHide(){
    let btn = document.getElementById('reset');
    let para1 = document.getElementById('box-1');
    let para2 = document.getElementById('box-2');
    let para3 = document.getElementById('box-3');
    let para4 = document.getElementById('box-4');
    let para5 = document.getElementById('box-5');
    let para6 = document.getElementById('box-6');
    let para7 = document.getElementById('box-7');
    let para8 = document.getElementById('box-8');
    let para9 = document.getElementById('box-9');

    let para10 = document.getElementById('box-10');
    let para11 = document.getElementById('box-11');
    let para12 = document.getElementById('box-12');
    let para13 = document.getElementById('box-13');
    let para14 = document.getElementById('box-14');
    let para15 = document.getElementById('box-15');
    let para16 = document.getElementById('box-16');



    para1.innerHTML = '';
    para2.innerHTML = '';
    para3.innerHTML = '';
    para4.innerHTML = '';
    para5.innerHTML = '';
    para6.innerHTML = '';
    para7.innerHTML = '';
    para8.innerHTML = '';
    para9.innerHTML = '';
    para10.innerHTML = '';
    para11.innerHTML = '';
    para12.innerHTML = '';
    para13.innerHTML = '';
    para14.innerHTML = '';
    para15.innerHTML = '';
    para16.innerHTML = '';

    // if(para.style.display != 'none'){
    // para.style.display = 'none';
    // }
    // else{
    // para.style.display = 'block';
    // }

    play_turn.innerHTML = "Turn of:-"+turn;
}
