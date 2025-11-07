document.getElementById("profileForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const location = document.getElementById("location").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const jobPreference = document.getElementById("jobPreference").value;

    const resumeFile = document.getElementById("resumeFile").files[0];
    const idProof = document.getElementById("idProof").files[0];
    const certificates = document.getElementById("certificates").files;

    if (!resumeFile) {
        alert("Please upload your resume (PDF).");
        return;
    }

    // ?? Create form data for file uploads
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("location", location);
    formData.append("skills", skills);
    formData.append("experience", experience);
    formData.append("jobPreference", jobPreference);
    formData.append("resume", resumeFile);

    if (idProof) formData.append("idProof", idProof);
    for (let file of certificates) {
        formData.append("certificates", file);
    }

    const statusMsg = document.getElementById("statusMessage");
    statusMsg.textContent = "Uploading... Please wait.";

    try {
        // ?? Add your backend or Firebase upload API here
        // Example placeholder:
        // const res = await fetch("https://your-backend-api.com/uploadProfile", {
        //   method: "POST",
        //   body: formData,
        // });

        // const data = await res.json();
        // if (res.ok) {
        //   statusMsg.textContent = "Profile saved successfully!";
        // } else {
        //   statusMsg.textContent = "Error: " + data.message;
        // }

        // ?? TEMP: Local simulation
        setTimeout(() => {
            statusMsg.textContent = "? Profile saved successfully (demo mode).";
        }, 1500);
    } catch (error) {
        console.error(error);
        statusMsg.textContent = "? Upload failed. Check console for details.";
    }
});
