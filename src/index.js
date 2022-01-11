import './less/index.less'

// Your code goes here!

document.addEventListener('mouseover', function(evt) {
    document.body.style.backgroundColor = 'lemonchiffon';
});
document.addEventListener('mouseout', function(evt) {
    document.body.style.backgroundColor = '';
});



const clickClick = document.querySelector('.intro h2');
clickClick.addEventListener('click', (event) => {
    event.target.style.color = 'royalblue';
});



const noRefresh = document.querySelector('.nav');
noRefresh.addEventListener('click', function(event){
    console.log('Hit me baby one more time');
event.preventDefault();
});



const blog = document.querySelectorAll('.nav a');
blog[2].addEventListener('click', function(e){
    alert('Beep Beep, backup it up, nothing to see here!');
    e.stopPropagation()
});



const introP = document.querySelector('.intro p');
introP.addEventListener('mouseenter', function(event){
    event.target.style.color = 'cadetblue';
});
introP.addEventListener('mouseleave', function(event){
    event.target.style.color = '';
});



const mainNav = document.querySelector('.footer p');
mainNav.addEventListener('dblclick', function(event) {
    event.target.style.color = 'crimson';
});



window.addEventListener('keydown', function(event) {
    alert("Sorry bruh, no (key)boards allowed");
});



window.addEventListener('copy', function(event) {
    alert('Nope nope nope, no copycopy')
})



const destination = document.querySelectorAll('.destination');
destination.forEach(function(event) {
    event.addEventListener('mouseleave', function() {
        event.style.backgroundColor = 'darkolivegreen';
        event.style.color = 'darksalmon';
    });
});



const btnBtn = document.querySelectorAll('.btn');
btnBtn[0].addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'coral';
});
btnBtn[1].addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'coral';
});
btnBtn[2].addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'coral';
});
