let addBtn = document.querySelector(".add-btn");     // isse button select ho jaega
let modal = document.querySelector(".modal-cont");   
let taskArea = document.querySelector(".textarea-cont");  
let addModal = true;
addBtn.addEventListener("click", function(){
    // console.log("Button is clicked");
    // modal.style.display = "flex";
    if(addModal){
        // show modal
        modal.style.display = "flex";
    }else{
        // hide modal
        modal.style.display = "none";
    }
    addModal = !addModal;
}) 
modal.addEventListener('keydown',function(e){
let key = e.key;
//console.log(key);

if(key == 'Enter'){
   createTicket(taskArea.value);
    taskArea.value = "";
   modal.style.display = "none";
  addModal  = !addModal; 
}
})



function createTicket(){
    console.log("create ticket");
}