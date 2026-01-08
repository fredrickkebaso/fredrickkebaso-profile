/**
 * Dynamically loads section HTML from /files directory
 * Smooth, fast, mobile-friendly
 */
function loadSection(fileName) {
    const contentDiv = document.getElementById("content");

    contentDiv.style.opacity = 0;
    contentDiv.innerHTML = `<p class="loading">Loading...</p>`;

    fetch(`files/${fileName}`, { cache: "force-cache" })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(html => {
            setTimeout(() => {
                contentDiv.innerHTML = html;
                contentDiv.style.opacity = 1;
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 150);
        })
        .catch(error => {
            contentDiv.innerHTML = `
                <p style="color:red; text-align:center;">
                    Error loading content. Please check file paths.
                </p>
            `;
            console.error(error);
        });
}

/* Load Home section by default */
document.addEventListener("DOMContentLoaded", () => {
    loadSection("Introduction_profile.html");
});
