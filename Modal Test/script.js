'use strict';

// Store class
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Grab all buttons, not just first one
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
console.log(btnsOpenModal);
for(let i  = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
   
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        console.log('hey');
        // this one needs parentheses
        closeModal();
    }
});