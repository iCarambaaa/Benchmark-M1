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

