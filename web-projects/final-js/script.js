//navigation
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";

}



//config buttons

const day = document.querySelector('#day');

const night = document.querySelector('#night');

const contrast = document.querySelector('#contrast');

night.addEventListener('click', function () {

    const body = document.querySelector('body');

    const nav = document.querySelector('nav');


    body.style.background = 'grey';


    body.style.color = 'white';




})

day.addEventListener('click', function () {

    const body = document.querySelector('body');

    const nav = document.querySelector('nav');


    body.style.background = 'white';

    body.style.color = 'black';



})
contrast.addEventListener('click', function () {

    const body = document.querySelector('body');

    const nav = document.querySelector('nav');


    body.style.background = 'black';

    body.style.color = 'white';



})



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
