let listItems=document.querySelectorAll("li");
for(let i=0;i<listItems.length;i++){
   listItems[i].addEventListener("click",function(event){
   alert("You clicked button" +event.target.innerText)
   })
}



// OPTION 1: listening on the parent
/*let ul = document.querySelector("ul");

// how many event listeners?
ul.addEventListener("click", function(event){
    alert("You just clicked on " + event.target.innerText);
});

// OPTION 2: listening on the children
let listItems = document.getElementsByTagName("li");

// how many event listeners?
for(let i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", function(event){
        alert("You just clicked on " + event.target.innerText);
    });
}*/