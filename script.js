let element = document.querySelector("[name=sk]");
let h1 = document.getElementById("h1")
let dateTag = document.querySelector('h3')
let p = document.getElementsByTagName('p');

let lastPTag = p[p.length-1];

lastPTag.innerText = "Enter value & Hit Submit to see Last Date as on calender:"

let date= new Date();

element.addEventListener('input',(e)=>{
    h1.innerText= e.target.value
})

function buttonClick(){
    if(element.value.trim().length===0){
        alert("Input cannot be blank, Kindly enter the value")
    }
    else{
    date.setDate(date.getDate()+ parseInt(element.value));
    dateTag.innerHTML = date;
    lastPTag.innerText = "Last Date as on calender:";
    element.value="";
    h1.innerText=""
}
}

const reset = () =>{
    date= new Date();
    dateTag.innerHTML = date;
    lastPTag.innerText = "Enter value & Hit Submit to see Last Date as on calender:"

}