/**
 * Dynamically loads section HTML from /files directory
 */
function loadSection(fileName) {
    const contentDiv = document.getElementById("content");

    fetch(`files/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html;
            window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch(error => {
            contentDiv.innerHTML = `
                <p style="color:red;">
                    Error loading content. Please check the file path.
                </p>
            `;
            console.error(error);
        });
}

/* Load Home section by default */
document.addEventListener("DOMContentLoaded", () => {
    loadSection("Introduction_profile.html");
});
