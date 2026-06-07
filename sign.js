const form = document.querySelector(".signin-box");
const email = document.getElementById("login-email");
const otpInput = document.getElementById("otp-input");
const sendOtpBtn = document.getElementById("send-otp-btn");
const verifyOtpBtn = document.getElementById("verify-otp-btn");
const resendOtpBtn = document.getElementById("resend-otp-btn");
const errorMsg = document.getElementById("error-msg");

function generateAndSendOTP() {
   
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    
    localStorage.setItem("otp", otp);
    
    alert(`Your OTP for Netflix Clone is: ${otp}`);
}

sendOtpBtn.addEventListener("click", () => {
    const userEmail = email.value.trim();

    if (userEmail === "") {
        errorMsg.innerText = "Please enter an email or phone number ";
        return;
    }

    generateAndSendOTP();
    
  
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
        errorMsg.innerText = "Please enter the OTP ";
        return;
    }

    if (enteredOtp === storedOtp) {
        const userEmail = email.value.trim();
        localStorage.setItem('userEmail', userEmail);
        alert("Login Successful ");
        localStorage.removeItem("otp"); 
        window.location.href = "browse.html"; 
    } else {
        errorMsg.innerText = "Invalid OTP ";
    }
});