function showmore() {
    var addprojects = document.getElementById("furtherprojects");
    var toggleButton = document.getElementById("toggleButton");

    if (addprojects.style.display === "none" || addprojects.style.display === "") {
        addprojects.style.display = "block";
        toggleButton.textContent = "Show Less";
    } else {
        addprojects.style.display = "none";
        toggleButton.textContent = "Show More";
    }
}