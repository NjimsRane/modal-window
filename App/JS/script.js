const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-container');

openModal.addEventListener('click',function(){
    modalContainer.classList.add('modal-container-show');
})
closeModal.addEventListener('click',()=>{
    modalContainer.classList.remove('modal-container-show')
});

window.addEventListener('click',(e)=>{
    if(e.target === modalContainer){
        modalContainer.classList.remove('modal-container-show');
    }
})