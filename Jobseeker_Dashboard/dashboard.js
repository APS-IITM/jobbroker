document.addEventListener("DOMContentLoaded", () => {
    // Simulated user data
    const userData = {
        name: "xyz",
        plan: "?499 - 8 Companies",
        date: "07 Nov 2025"
    };

    // Update dashboard
    document.getElementById("userName").innerText = userData.name;
    document.getElementById("planType").innerText = userData.plan;
    document.getElementById("planDate").innerText = userData.date;
});

function navigateTo(section) {
    switch (section) {
        case 'profile':
            window.location.href = "profile.html";
            break;
        /*case 'documents':
            window.location.href = "../documents/documents.html";
            break;*/
        case 'support':
            window.location.href = "support.html";
            break;
        default:
            alert("Section not available yet.");
    }
}
