let allCategories = ["web", "mobile", "data", "design", "game", "engineering", "conceptual", "internship"];
let selectedCategories = [];

function filter(category) {
    var projects = document.getElementsByClassName("project");
    if (category == "clear") {
        selectedCategories = [];
    } else if (selectedCategories.indexOf(category) > -1) {
        var index = selectedCategories.indexOf(category);
        if (index !== -1) {
            selectedCategories.splice(index, 1);
        }
    } else {
        selectedCategories.push(category);
    }

    for (var i = 0; i < allCategories.length; i++) {
        var button = document.getElementById(allCategories[i]);
        console.log(category);
        button.classList.remove("selected");

        if (selectedCategories.indexOf(allCategories[i]) > -1) {
            button.classList.add("selected");
        }
    }

    for (var i = 0; i < projects.length; i++) {
        projects[i].classList.remove("hidden");

        for (var j = 0; j < selectedCategories.length; j++) {
            if (!projects[i].classList.contains(selectedCategories[j])) {
                projects[i].classList.add("hidden");
            }
        }
    }
}

function find(category) {
    var projects = document.getElementsByClassName("project");

    for (var i = 0; i < projects.length; i++) {
        projects[i].classList.remove("hidden");

        if (!projects[i].classList.contains(category)) {
            projects[i].classList.add("hidden");
        }
    }
}