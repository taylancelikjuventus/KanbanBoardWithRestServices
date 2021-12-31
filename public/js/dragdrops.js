
//Drag Drop Handlers
function allowDrop(event) { //allows ondragover event on element
    event.preventDefault();
}

function dontAllowDrop(event) {
    event.stopPropagation();
}

var elem = null;

function drag(event) {


    //burada drag yapılan elementin id sini (ki bu ilk parametredeki "text"
    //saklıyoruz. 1.parametre tip 2.parametre drag yapılan elementin id si
    //burdaki target drag yapılan element
    event.dataTransfer.setData("text", event.target.id);


}


function drop(event) {    //allows drop event on element
    event.preventDefault(); //allow drop on this element

    event.stopPropagation();

    //here data is id of Card
    var data = event.dataTransfer.getData("text");

   
    const draggedCard = document.getElementById(data);
    const targetElement = event.target;
    var listID = ""; 
   

    console.log("target : " + event.target.getAttribute("class"));

   //if drop target is card
    if(targetElement.getAttribute("class") == "card" && targetElement.parentNode.getAttribute("class") != "card"  ){
        
        //if draggedCard is dragged in the same list
        //just change its order in the list
       if(targetElement.parentNode.id == draggedCard.parentNode.id){
        
        targetElement.insertAdjacentElement("afterend", draggedCard);
        //store id of target element(here is Card)
        listID = targetElement.parentNode.id ;
           
       } 
     
      //if dragged card comes from different list
      //just append it to the end of current list.
        if(targetElement.parentNode.id != draggedCard.parentNode.id){
        
        targetElement.parentNode.appendChild(draggedCard); 
        //store id of target element(here is Card)
        listID = targetElement.parentNode.id ;
           
       } 
       
       
       //Changing ID of each card 
       
       
    }

   //if drop target is list 
   if(targetElement.getAttribute("class") == "list"){
       
      targetElement.appendChild(draggedCard); 
      //store id of target element(here is List)
       listID= targetElement.id;  
    }

    //UPDATE
    //update taskstatus in database after drop operation
    alert(targetElement.id);
    
   // const listID = event.target.id;
    var status = "";
    if (listID == "list1")
        status = "backlog";
    if (listID == "list2")
        status = "todo";
    if (listID == "list3")
        status = "inProgress";
    if (listID == "list4")
        status = "done";

    //update taskstatus in database   
    //orderid yide parametreden geçir
    updateTaskStatus("http://localhost:8005/tasks/status/update/", data, status);






}
