// Simple button event handlers
document.getElementById('loginBtn').addEventListener('click', () => {
    window.location.href = 'Register_Login.html';
});

document.getElementById('enrollBtn').addEventListener('click', () => {
    alert('Redirecting to enrollment page...');
    // window.location.href = 'enroll.html';
});
document.getElementById('adminBtn').addEventListener('click', () => {
    window.location.href = 'admin_login.html';
})
