window.addEventListener("load", () => {
main = new main();
} )

class main {
    constructor() {
        document.querySelectorAll(".button").forEach( (element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault()
                console.log(element)
            })
        });
    }
}