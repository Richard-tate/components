const open = document.querySelector('#open-modal');
open.addEventListener('click', function(){
    document.querySelector('#overlay').style.display = 'block';
});

const close = document.querySelector('#close-modal');
close.addEventListener('click', function(){
    document.querySelector('#overlay').style.display = 'none';
});