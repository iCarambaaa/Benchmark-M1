//41) Add an eventListener to alert when the mouse is over a link, displaying the URL
/*
let link = document.getElementsByTagName("a")
link.addEventListener("mouseover", mouseOver())
function mouseOver() {
    alert("display URL")
} */

//42) Add a button to hide every image on the page
// NOT WORKING
function HidePictures() {
    let hide = document.getElementsByTagName("img")
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  } 

 //43) Add a button to hide and show the table from the page
// NOT WORKING
 function HideNShow() {
    let hide = document.getElementsById("myTable")
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  } 