function select (){
    const x = document.querySelectorAll('.post');
      for (let i= 0; i <x.length; i++){
      } const y = document.querySelectorAll('.btn');
        for(let r = 0; r <y.length; r++ ){
          y[r].addEventListener('click', function (){
           x[r].parentNode.removeChild(x[r]);  
        });
        }
    } select();
    
    
    