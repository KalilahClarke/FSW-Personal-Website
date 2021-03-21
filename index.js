//Track visitor coming to the website pull vistors name from intro page and ... personalize the website to them ex. welcome name

// Contact 
//Information in Form with EventListener

//Skills
//https://marializa.netlify.app/#services 
//Hover Over Specific Platforms and When Clicked Give brief synopsis on what the platform is about.
// document.addEventListener("DOMContentLoaded", (event) =>{
// event.preventDefault();
// const entrance = document.querySelector(".entrance");
// const enterExp = document.querySelector(".enterExp")
// const name= document.querySelector(".name")
// entrance.addEventListener("submit", (e) => {
// debugger

// let string ="";
// if(name.length === 0){
//     name.textContent = "Please Input Your Full Name "
// }else{


// }

// })
// })

let bodyTag = document.querySelector("#body-tag")
let introPage = document.querySelector("#intro-page") 
let enterExp= document.querySelector(".enterExp")
enterExp.addEventListener("click",(event)=>{
    introPage.style.display = "none" 
  const article =document.querySelector("article") 
    article.style.visibility = "visible"
})