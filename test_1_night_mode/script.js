window.addEventListener("load", () => {
    const body = document.querySelector("body");
    const button = document.querySelector("button");
    const span = document.querySelector("span");
    const title = document.querySelector("h1");
    const subtitle = document.querySelector("h3");
    const icon = document.querySelector("i");
    let compteur = 0;

    function darkMode() {
            body.style.backgroundColor = "#191717";
            title.style.color = "gray";
            title.innerHTML = "C'est mieux, non ?";
            subtitle.style.color = "gray";
            button.style.backgroundColor = "#332f2f";
            span.style.left = "60%";
            span.style.color = "gray";
            span.style.boxShadow = "rgb(0, 0, 0) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.5) -3px -3px 6px 1px inset";
            icon.className = "far fa-lightbulb";
            icon.title = "Switch to light mode";
            compteur = 1;
    }   
    
    function lightMode() {
        body.style.backgroundColor = "#f5f5f5";
        title.style.color = "black";
        title.innerHTML = "Marre des sites en mode clair ?";
        subtitle.style.color = "black";
        button.style.backgroundColor = "#f5f5f5";
        span.style.left = "0";
        span.style.color = "black";
        span.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
        icon.className = "far fa-moon";
        icon.title = "Switch to night mode";
        compteur = 0;
    }

    console.log(compteur);

    if(compteur == 0) {
        button.addEventListener("click", () => {
            darkMode();
            console.log(compteur);
        });
    } else {
        button.addEventListener("click", () => {
            lightMode();
            console.log(compteur);
        });
    }

        // button.addEventListener("click", () => {
        //     body.style.backgroundColor = "#f5f5f5";
        //     title.style.color = "black";
        //     title.innerHTML = "Marre des sites en mode clair ?";
        //     subtitle.style.color = "black";
        //     button.style.backgroundColor = "white";
        //     span.style.left = "0";
        //     span.style.color = "";
        //     icon.classList.remove = "fa-moon";
        //     icon.classList.add = "fa-sun";
        // });
});