const modalBox = document.querySelector('.modal');
const modalBtn = document.querySelector('.open-modal');
modalBtn.addEventListener('click', openModal);
const arr1 = ['images/1.png', 'images/2.png', 'images/3.png' ];
let indexImage = 1;
const num = arr1.length;

function openModal(){
  modalBox.style.display = 'block';  
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal-card');
  modalBox.appendChild(modalCard);
  const modalCardImage = document.createElement('img');
  modalCardImage.classList.add('modal-card-img');
  modalCardImage.setAttribute( 'src', arr1[0]);
  modalCard.appendChild(modalCardImage);
  const modalCardClose = document.createElement('button');
  modalCardClose.classList.add('close-btn');
  modalCardClose.textContent = 'Close';
  modalCardClose.addEventListener('click', function(){
      modalBox.removeChild(modalCard);
      modalBox.style.display = 'none';
  });
  modalCard.appendChild(modalCardClose);
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = ' > ';
  nextBtn.classList.add('btn-next');
  modalCard.appendChild(nextBtn);
  const backBtn = document.createElement('button');
  backBtn.innerHTML = '<';
  backBtn.classList.add('btn-prev');
  modalCard.appendChild(backBtn);
  carousel();
}

function carousel(){
    if(modalBox.style.display === 'block'){
    const images = document.querySelector('.modal-card-img');  

    const next = document.querySelector('.btn-next');
    next.addEventListener('click', nextImage);

    const back = document.querySelector('.btn-prev');
    back.addEventListener('click', prevImage);

function nextImage(){
    images.setAttribute('src', arr1[indexImage]);
    if(indexImage === num -1){
        indexImage = 0;
    }else{
        indexImage++;
    }
}

function prevImage(){
    images.setAttribute('src', arr1[indexImage]);
    if(indexImage === 0){
        indexImage = num -1;
    }else{
        indexImage--;
    }
    }
}
}
