function showLogin() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username && password) {
        alert('Login successful!');
        document.getElementById('login').style.display = 'none';
        document.getElementById('sections').style.display = 'block';
    } else {
        alert('Please enter both username and password');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;
    
    function moveSlide(direction) {
        const cardWidth = document.querySelector(".therapist-card").offsetWidth + 20;
        index += direction;
        if (index < 0) {
            index = 0;
        } else if (index > track.children.length - 3) {
            index = track.children.length - 3;
        }
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }
    
    prevBtn.addEventListener("click", function() {
        moveSlide(-1);
    });
    
    nextBtn.addEventListener("click", function() {
        moveSlide(1);
    });
});