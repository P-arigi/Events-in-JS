//Here we will get the error because we didn't write tag name in HTML
let buttons=document.getElementsByTagName("button");
//buttons.addEventListener("click" ,function(){
//    alert("You clicked the button");
//});

//If we want to add function to each button
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        alert("You clicked the buttons")
    })
}