//31) Get element with ID "container" from the page

let containerElement = function () {
    let cE = document.getElementById("container")
}

//32) Get every "td" from the page

let everyTD = function () {
let everyTd = document.querySelectorAll("td")
}

//33) Create a cycle that prints the text inside every td of the page
// don´t know maybe later

let everyTdText = []
function cycle() {
   let ett = document.querySelectorAll("td")
   let text = ett.innerHtml 
}

//34) Write a function to change the heading of the page

function changeH1() {
    let newH1 = document.querySelector("h1")
    newH1.innerText = "Now we changed the heading"
}

//35) Write a function to add an extra row to the table

let extraRow = function() {
    let table = document.getElementById("myTable")
    table.insertRow(0)
}

//36) Write a function to add the class "test" to each row in the table

let addTestClass = function() {
    let rows = document.querySelectorAll("tr")
    rows.classList.add("test")
}

//  37) Write a function to add a red background to every link in the page

let addRedBG = function() {
    let links = document.querySelectorAll("a")
    links.forEach((a) => {
        a.style.backgroundColor = "red";
      });
}

//38) Console log "Page loaded" when the page is correctly loaded

window.onload = function(){
    console.log("Page loaded")
}

//39) Write a function to add new items to a UL

let newListItem = function() {
    let list = document.getElementById("UL")
    let li = document.createElement("li")
    list.appendChild(li)
}

//40) Write a function to empty a list

let emptyList = function() {
    while(UL.firstElementChild) {
        UL.firstElementChild.remove()
    }
}