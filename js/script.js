let response = [0,2,4,6,8];
let questions = document.querySelectorAll('.question');

document.querySelector('.invite').addEventListener('click',()=>{
    if (response[0]==0){
        
        document.querySelector('.invite').nextElementSibling.style.display ='block';
        document.querySelector('.invite').style.transform = 'rotate(180deg)';
        document.querySelector('.question').style.fontWeight = 'bold';
        response[0] = 1
    } else {
        document.querySelector('.invite').nextElementSibling.style.display ='none';
        document.querySelector('.invite').style.transform = 'rotate(0deg)';
        document.querySelector('.question').style.fontWeight = '400';
        response [0] = 0;
    }
})

document.querySelector('.upload').addEventListener('click',()=>{
    if (response[1]==2){
        document.querySelector('.upload').nextElementSibling.style.display ='block';
        document.querySelector('.upload').style.transform = 'rotate(180deg)';
        questions[1].style.fontWeight = 'bold';
        response[1] = 3
    } else {
        document.querySelector('.upload').nextElementSibling.style.display ='none';
        document.querySelector('.upload').style.transform = 'rotate(0deg)';
        questions[1].style.fontWeight = '400';
        response [1] = 2;
    }
})

document.querySelector('.password').addEventListener('click',()=>{
    if (response[2]==4){
        document.querySelector('.password').nextElementSibling.style.display ='block';
        document.querySelector('.password').style.transform = 'rotate(180deg)';
        questions[2].style.fontWeight = 'bold'
        response[2] = 5
    } else {
        document.querySelector('.password').nextElementSibling.style.display ='none';
        document.querySelector('.password').style.transform = 'rotate(0deg)';
        questions[2].style.fontWeight = '400';
        response [2] = 4;
    }
})

document.querySelector('.subs').addEventListener('click',()=>{
    if (response[3]==6){
        document.querySelector('.subs').nextElementSibling.style.display ='block';
        document.querySelector('.subs').style.transform = 'rotate(180deg)';
        questions[3].style.fontWeight = 'bold'
        response[3] = 7
    } else {
        document.querySelector('.subs').nextElementSibling.style.display ='none';
        document.querySelector('.subs').style.transform = 'rotate(0deg)';
        questions[3].style.fontWeight = '400'
        response [3] = 6;
    }
})

document.querySelector('.support').addEventListener('click',()=>{
    if (response[4]==8){
        document.querySelector('.support').nextElementSibling.style.display ='block';
        document.querySelector('.support').style.transform = 'rotate(180deg)';
        questions[4].style.fontWeight = 'bold'
        response[4] = 9
    } else {
        document.querySelector('.support').nextElementSibling.style.display ='none';
        document.querySelector('.support').style.transform = 'rotate(0deg)';
        questions[4].style.fontWeight = '400';
        response [4] = 8;
    }
})

