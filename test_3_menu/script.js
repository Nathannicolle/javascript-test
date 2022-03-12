window.addEventListener("load", () => {
    document.querySelectorAll(".fullscreen_menu .menu a").forEach(element => {
        element.addEventListener("mouseover", () => {
            document.querySelector(".wrapper_" + element.getAttribute("id") + " img").style = "opacity: 1; transform: scale(1.2);";
        });

        element.addEventListener("mouseleave", () => {
            document.querySelector(".wrapper_" + element.getAttribute("id") + " img").style = "opacity: 0.4; transform: scale(1);";
        });
    });

    document.querySelectorAll(".wrapper").forEach(element => {
        let splited_classes = element.getAttribute("class").split(" ");
        let splitted_class_name = splited_classes[1].split("_");
        element.addEventListener("mouseover", () => {
            document.getElementById(splitted_class_name[1]).style = "color: white;";
        });

        element.addEventListener("mouseleave", () => {
            document.getElementById(splitted_class_name[1]).style = "color: gray;";
        });
    });
});