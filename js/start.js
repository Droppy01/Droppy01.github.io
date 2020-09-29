window.addEventListener("load", () => {
main = new main();
} )

class main {
    constructor() {
        // loading the menu
        menu.forEach((value, index)=>{
            let product = new productcCompunent(value, index);
            document.querySelector("main").insertAdjacentElement("beforeend", product.getElement());
        })

        //search for all buttons and add an EventListener
        document.querySelectorAll(".button").forEach( (element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();

                // check if there is alrady a menu open
                if (!(document.querySelector("main").className == "blur")){
                    
                    // add blur efect
                    document.querySelector("main").className = "blur";
                    document.querySelector("body>header").className = "blur";
                    //get the selectet product
                    let product = menu[element.id];
                    
                    // generate bestaat uit list
                    let list = "";

                    product.bestaat_uit.forEach((onderdeel) => {
                        list += `<li>${onderdeel}</li>\n`
                    })


                    //create and fill an element
                    let artical = document.createElement("article");
                    artical.innerHTML = `
                    <section>
                        <header>
                            <h5>details</h5>
                            <p>sluiten</p>
                        </header>
                        <div class="inhoud">
                            <img src="${product.img}">
                            <div class="product_details">
                                <h1>${product.name}</h1>
                                <h2>${product.product_slang}</h2>
                                <p class=details>${product.details}</p>
                            </div>
                            <div class="bestaat_uit">
                            <h2>Bestaat uit</h2>
                            <ul>
                                ${list}
                            </ul>
                            </div>
                        </div>
                    </section>
                    `;
                    artical.style.position = "absolute";
                    artical.style.top = element.getBoundingClientRect().y+"px";
                    artical.style.left = element.getBoundingClientRect().x+"px";
                    artical.style.width = "70px";
                    artical.style.height = "40px";
                    requestAnimationFrame(()=>{
                        requestAnimationFrame(()=> {
                           
                            artical.style.top = "10vh";
                            artical.style.left = "10vw";
                            artical.style.width = "80vw";
                            artical.style.height = "80vh";
                        })
                    })
                    //show the element
                    document.body.insertAdjacentElement("beforeend", artical);



                    //add overflow scroll after animation
                    setTimeout(() => {
                        artical.querySelector("section>div").style.overflow = "scroll";
                    }, 500);

                    //add close event lissener
                    artical.querySelector("header>p").addEventListener("click", (event) => {
                        // remove blur efect
                        document.querySelector("main").className = "";
                        document.querySelector("body>header").className = "";

                        artical.style.top = element.getBoundingClientRect().y+"px";
                        artical.style.left = element.getBoundingClientRect().x+"px";
                        artical.style.width = "70px";
                        artical.style.height = "40px";
                        
                        //remove the artical on screen
                        setTimeout(()=> {document.querySelector("body>article").remove();}, 500)
                    })
                    
                }
            })
        });
    }
}
//this is all of the products in the shop
const menu = [
    
    {
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        name:"Boneless Bucket",
        product_slang:"Sharing is caring",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:19.99,
        bestaat_uit:[
            "2x Medium Popcorn Chicken",
            "10x Crispy Tenders",
            "2x bijgerechten naar keuze"
        ]
    },
    {
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/0e1d8654-d05fd9e8/big-mix-bucket-rect-xl.jpeg",
        name:"BIG MIX BUCKET",
        product_slang:"Let’s mix things up!",
        details:"Keuzestress? Let it go, de Big Mix Bucket is het antwoord. Hierin zitten 4x Original pcs, 6x Hot Wings en 6x Crispy Tenders. Zo hoef je niets te missen van al het lekkers.",
        price:18.89,
        bestaat_uit:[
            "4x Original pcs",
            "6x Hot Wings",
            "6x Crispy Tenders"
        ]
    },
    {
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/719744af-dd2e2b15/milkshakes-nieuw-rect-xl.jpeg",
        name:"Milkshakes (S)",
        product_slang:"Your daily dose of milk!",
        details:"Onze nieuwe milkshakes: extra romig, extra dik. Vol van natuurlijke en rijke smaken. Verfrissend tot de laatste slok!",
        price:18.89,
        bestaat_uit:[
            "1x Milkshake naar keuze",
            "Vanille",
            "Chocolade",
            "Aardbei",
            "Banaan"
        ]
    }

    
]