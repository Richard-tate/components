let arr = [];
const modalBox = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('.open-modal');
modalBtn.forEach(modalBtn => {
    modalBtn.addEventListener('click', (e)=>{
       if(modalBtn.id === 'btn0'){
           arr = arr.concat(arr1);
           num = arr.length;
           console.log(num);
       }
       if (modalBtn.id === 'btn1'){
           arr = arr.concat(arr2);
           num = arr.length;
          console.log(num); 
       }
       if(modalBtn.id === 'btn2'){
           arr = arr.concat(arr3);
           num = arr.length;
           console.log(num); 
       }
       if(modalBtn.id === 'btn3'){
            arr = arr.concat(arr4);
            num = arr.length;
            console.log(num); 
       }
       if(modalBtn.id === 'btn4'){
            arr = arr.concat(arr5);
            num = arr.length;
            console.log(num); 
       }
       if(modalBtn.id === 'btn5'){
            arr = arr.concat(arr6);
            num = arr.length;
            console.log(num); 
       }
       openModal();
    } );
});

let arr1 = ['images/4.png', 'images/5.png', 'images/6.png'];
let arr2 = ['images/1.png','images/2.png','images/3.png'];
let arr3 = ['images/7.png', 'images/8.png','images/9.png'];
let arr4 = ['images/10.png', 'images/11.png','images/12.png'];
let arr5 = ['images/13.png', 'images/14.png','images/15.png'];
let arr6 = ['images/16.png', 'images/17.png','images/18.png'];
let indexImage = 1;
let num = arr.length;

function openModal(){
  modalBox.style.display = 'block';  
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal-card');
  modalBox.appendChild(modalCard);
  const modalCardClose = document.createElement('button');
  modalCardClose.classList.add('close-btn');
  modalCardClose.textContent = 'Close';
  modalCardClose.addEventListener('click', function(){
      modalBox.removeChild(modalCard);
      modalBox.style.display = 'none';
      arr = [];
  });
  modalCard.appendChild(modalCardClose);
  const modalCardImage = document.createElement('img');
  modalCardImage.classList.add('modal-card-img');
  modalCardImage.setAttribute('src', arr[0]);
  modalCard.appendChild(modalCardImage);
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
        images.setAttribute('src', arr[indexImage]);
        if(indexImage === num -1){
            indexImage = 0;
        }else{
            indexImage++;
        }
}

function prevImage(){
    images.setAttribute('src', arr[indexImage]);
    if(indexImage === 0){
        indexImage = num -1;
    }else{
        indexImage--;
    }
    }
  }
}
