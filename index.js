
const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let listItems = ""
inputBtn.addEventListener("click", function(){
    if (inputEl.value != ""){
    myLeads.push(inputEl.value)
    renderLeads()
    }
    
})
    

function renderLeads(){

for ( let i = 0; i < myLeads.length; i++ ){
        //ulEl.textContent += myLeads[i]
        listItems += "<li>" + myLeads[i] + "</li>"
        ulEl.innerHTML = listItems
}
    inputEl.value =""
    console.log("Button clicked!")
    console.log(myLeads)
}


