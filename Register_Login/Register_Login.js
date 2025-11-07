const form = document.getElementById("registerForm");
const formTitle = document.getElementById("form-title");
const toggleForm = document.getElementById("toggleForm");
const submitBtn = document.getElementById("submitBtn");

const nameGroup = document.getElementById("nameGroup");
const mobileGroup = document.getElementById("mobileGroup");
const confirmGroup = document.getElementById("confirmGroup");

let isLogin = false;

toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;

    if (isLogin) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleForm.textContent = "Register";
        document.querySelector(".toggle-text").childNodes[0].textContent = "New user? ";

        nameGroup.style.display = "none";
        mobileGroup.style.display = "none";
        confirmGroup.style.display = "none";
    } else {
        formTitle.textContent = "Register";
        submitBtn.textContent = "Register";
        toggleForm.textContent = "Login";
        document.querySelector(".toggle-text").childNodes[0].textContent = "Already have an account? ";

        nameGroup.style.display = "block";
        mobileGroup.style.display = "block";
        confirmGroup.style.display = "block";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isLogin) {
        // Login simulation
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        alert("Login successful!");
        window.location.href = "user_dashboard.html";
    } else {
        // Register simulation
        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!name || !mobile || !email || !password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        window.location.href = "user_dashboard.html";
    }
});
