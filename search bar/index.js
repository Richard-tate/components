// these are both ways to compare user input //

// both of the following do the same //

// this is not defined with in a function//
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.querySelectorAll('.name');
    
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        if(currentName.includes(searchQuery)){
             allNamesDOMCollection[counter].style.display = 'block';   
        }else{
            allNamesDOMCollection[counter].style.display = 'none';
        }
    }
});


// this is defined within a function//
// this way could be added to submit button //
// or left as is so that it searches live on key up //
function handleInput(){
    document.querySelector('#searchInput').addEventListener('keyup', function(event){
        let searchQuery = event.target.value.toLowerCase();
        let allNamesDOMCollection = document.querySelectorAll('.name');
        
       for(let counter = 0; counter < allNamesDOMCollection.length; counter++ ){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        if(currentName.includes(searchQuery)){
           allNamesDOMCollection[counter].style.display = 'block';
        }else{
            allNamesDOMCollection[counter].style.display = 'none';
        }
       }
    });
}handleInput();