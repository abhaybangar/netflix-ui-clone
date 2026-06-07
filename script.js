// EMAIL VALIDATION + BUTTON CLICK
const emailInput = document.getElementById("email-btn");
const getStartedBtn = document.querySelector(".btn-red");

getStartedBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Enter your email bro 🚫");
        return;
    }

   
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Invalid email format ❌");
        return;
    }

    // Store email temporarily and go to signin
    localStorage.setItem('tempEmail', email);
    alert("Welcome to Netflix Clone 😎🔥");
    setTimeout(() => {
        window.location.href = 'signin.html';
    }, 500);
});


// FAQ TOGGLE (ACCORDION STYLE)
const faqItems = document.querySelectorAll(".faq li");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".answer");

        // toggle active class
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            faqItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});


// SCROLLABLE TRENDING SECTION
const moviesContainer = document.querySelector(".movies");

let isDown = false;
let startX;
let scrollLeft;

moviesContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - moviesContainer.offsetLeft;
    scrollLeft = moviesContainer.scrollLeft;
});

moviesContainer.addEventListener("mouseleave", () => {
    isDown = false;
});

moviesContainer.addEventListener("mouseup", () => {
    isDown = false;
});

moviesContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - moviesContainer.offsetLeft;
    const walk = (x - startX) * 2; // speed
    moviesContainer.scrollLeft = scrollLeft - walk;
});


// BUTTON HOVER EFFECT (extra polish)
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

const signInBtn = document.getElementById("signin-btn");

signInBtn.addEventListener("click", () => {
    window.location.href = "signin.html";
});

