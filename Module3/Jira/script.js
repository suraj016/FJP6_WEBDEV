let addBtn = document.querySelector(".add-btn");     // isse button select ho jaega
let modal = document.querySelector(".modal-cont");   
let taskArea = document.querySelector(".textarea-cont"); 
let mainCont =  document.querySelector(".main-cont");
let allPriorityColor =  document.querySelectorAll(".priority-color");
let addModal = true;
let modalPriorityColor = 'black';
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

for(let  i = 0; i < allPriorityColor.length; i++){
    let PriorityDivOneColor = allPriorityColor[i];
    PriorityDivOneColor.addEventListener("click", function(){
        for( let j = 0; j < allPriorityColor.length; j++){
            allPriorityColor[j].classList.remove("active");
        }
        PriorityDivOneColor.classList.add("active");
        modalPriorityColor = PriorityDivOneColor.classList[0];
       
})
}


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



function createTicket(ticketColor,task){
   


let ticketCont = document.createElement("div");
ticketCont.setAttribute('class','ticket-cont' );
ticketCont.innerHTML = `<div class="ticket-cont">
                 <div class="ticket-color ${ticketColor}"></div>
                 <div class="ticket-id">#dfrwgv443</div>
                 <div class="task-area">${task}</div>
                 </div>`


    mainCont.appendChild(ticketCont);             



}