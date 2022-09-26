let button=document.getElementsByTagName("button")
function alertData(){            //If we not write function separately like this,remove will not work.
                                 //Because its a Anonymous function.
    alert("You clicked the button")
}
for(let i=0;i<button.length;i++){
     button[i].addEventListener("click",alertData);
}

for(let i=0;i<button.length;i++){
    button[i].removeEventListener("click",alertData);
}