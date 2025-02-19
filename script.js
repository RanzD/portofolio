document.addEventListener('DOMContentLoaded', function() {
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');
    const dropdownLinks = document.querySelectorAll('.dropdown .links a');
    
    // Toggle mobile menu
    hamburg.addEventListener('click', function() {
        dropdown.classList.add('active');
        hamburg.style.display = 'none';
        cancel.style.display = 'block';
    });
    
    cancel.addEventListener('click', function() {
        dropdown.classList.remove('active');
        hamburg.style.display = 'block';
        cancel.style.display = 'none';
    });
    
    // Close menu when a link is clicked
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdown.classList.remove('active');
            hamburg.style.display = 'block';
            cancel.style.display = 'none';
        });
    });
    
    // Close menu on window resize if screen becomes large
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            dropdown.classList.remove('active');
            hamburg.style.display = 'none';
            cancel.style.display = 'none';
        } else {
            hamburg.style.display = cancel.style.display === 'block' ? 'none' : 'block';
        }
    });
});
// Typewriter Effect
const texts = [
    "MINECRAFTER",
    "PROGAMMER",
    "YOUTUBER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
AOS.init();

window.onload = typeWriter
document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "https://discord.gg/gnMHHjtRXc";
});