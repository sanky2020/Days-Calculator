let element = document.querySelector("[name=sk]");
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let dateTag = document.querySelector('h3')

let date= new Date();
// controlled
element.addEventListener('input',(e)=>{
    h1.innerText= e.target.value
})

// uncontrolled
function buttonClick(){
    h2.innerText= parseInt(element.value);

    date.setDate(date.getDate()+ parseInt(element.value));

    dateTag.innerHTML = date;

}
dateTag.innerHTML = date;