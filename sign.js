const form = document.querySelector(".signin-box");
const email = document.getElementById("login-email");
const otpInput = document.getElementById("otp-input");
const sendOtpBtn = document.getElementById("send-otp-btn");
const verifyOtpBtn = document.getElementById("verify-otp-btn");
const resendOtpBtn = document.getElementById("resend-otp-btn");
const errorMsg = document.getElementById("error-msg");

function generateAndSendOTP() {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP in local storage
    localStorage.setItem("otp", otp);
    
    // Simulate sending OTP
    alert(`Your OTP for Netflix Clone is: ${otp}`);
}

sendOtpBtn.addEventListener("click", () => {
    const userEmail = email.value.trim();

    if (userEmail === "") {
        errorMsg.innerText = "Please enter an email or phone number ❌";
        return;
    }

    generateAndSendOTP();
    
    // Update UI
    errorMsg.innerText = "";
    email.readOnly = true;
    email.style.opacity = "0.7";
    sendOtpBtn.style.display = "none";
    
    otpInput.style.display = "block";
    verifyOtpBtn.style.display = "block";
    resendOtpBtn.style.display = "block";
});

resendOtpBtn.addEventListener("click", () => {
    generateAndSendOTP();
    errorMsg.style.color = "green";
    errorMsg.innerText = "A new OTP has been sent! ✅";
    
    // Reset color back to red for future error messages
    setTimeout(() => {
        errorMsg.style.color = "";
        if (errorMsg.innerText === "A new OTP has been sent! ✅") {
            errorMsg.innerText = "";
        }
    }, 3000);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const enteredOtp = otpInput.value.trim();
    const storedOtp = localStorage.getItem("otp");

    if (enteredOtp === "") {
        errorMsg.innerText = "Please enter the OTP ❌";
        return;
    }

    if (enteredOtp === storedOtp) {
        const userEmail = email.value.trim();
        localStorage.setItem('userEmail', userEmail);
        alert("Login Successful 🚀");
        localStorage.removeItem("otp"); // Clear OTP after successful login
        window.location.href = "browse.html"; // redirect to content page
    } else {
        errorMsg.innerText = "Invalid OTP ❌";
    }
});