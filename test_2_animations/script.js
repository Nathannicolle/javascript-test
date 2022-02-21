document.querySelector("h1 a").addEventListener("mouseover", (event) => {
    event.target.setAttribute('data-after', document.querySelector("h1 a").getAttribute("title"));
});