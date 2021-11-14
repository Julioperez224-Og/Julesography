const packagesContainer = document.querySelectorAll(".packages-class")
const packageBtns = document.querySelectorAll("button");

document.body.addEventListener("click", (e)=>{
    e.defaultPrevented;
    console.log(e.target)
    if(e.target.previousElementSibling.classList.contains("packages-container")){
        console.log("hey")
        e.target.previousElementSibling.classList.toggle("display");
        e.target.previousElementSibling.previousElementSibling.classList.toggle("displayNone");
        if(e.target.innerText === "Hide"){
            e.target.innerText = "Info"
        } else{
            e.target.innerText = "Hide"

        }
        
    } 
})