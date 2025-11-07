// Admin Login
document.getElementById("adminLoginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    // ? Updated with your credentials
    if (email === "admin@example.com" && password === "123456") {
        // Redirect to dashboard
        window.location.href = "admin_dashboard.html";
    } else {
        document.getElementById("loginWarning").innerText = "? Invalid email or password!";
    }
});

// Section switching
function showSection(id) {
    document.querySelectorAll(".admin-section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// Logout
function logoutAdmin() {
    window.location.href = "admin_login.html";
}

// Dummy dashboard data (replace later with Firebase)
window.onload = function () {
    const enrollments = 45;
    const payments = 18999;
    const jobseekers = 38;

    document.getElementById("totalEnrollments").innerText = enrollments;
    document.getElementById("totalPayments").innerText = payments;
    document.getElementById("totalJobseekers").innerText = jobseekers;
};

// CSV Report
function generateReport() {
    alert("?? Add backend API to fetch payment data and generate CSV report.");
}
