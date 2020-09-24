window.addEventListener("load", () => {
main = new main();
} )

class main {
    constructor() {
        // loading the menu
        menu.forEach((value, index)=>{
            let product = new productcCompunent(value, index)
            document.querySelector("main").insertAdjacentElement("beforeend", product.getElement())
        })


        document.querySelectorAll(".button").forEach( (element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault()
                // check if there is alrady a menu open
                if (!(document.querySelector("main").className == "blur")){
                    
                    // add blur efect
                    document.querySelector("main").className = "blur"

                    //get the selectet product
                    let product = menu[element.id]

                    //create and fill an element
                    let artical = document.createElement("article");
                    artical.innerHTML = `
                    <header>
                        <h5>details</h5>
                        <p>close</p>
                    </header>
                    
                    <h1>${product.name}</h1>
                    <p class=details>${product.details}</p>
                    <img src="${product.img}">
                    
                    `
                    //show the element
                    document.body.insertAdjacentElement("beforeend", artical)

                    //add close event lissener
                    artical.addEventListener("click", (event) => {
                        // remove blur efect
                        document.querySelector("main").className = "";

                        document.querySelector("body>article").remove()
                    })
                    
                }
            })
        });
    }
}

const menu = [
    
    {
        name:"Boneless Bucket",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:19.99
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },{
        name:"product 1",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },
    {
        name:"product 2",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },
    {
        name:"product 3",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    },
    {
        name:"product 4",
        img:"https://s3-eu-west-1.amazonaws.com/kfc-nl/e4b0b0d6-0e7b96af/boneless-bucket-kfc-nieuw-rect-xs.jpeg",
        details:`Sharing is caring! Onze Popcorn Chicken (2x), 10 Crispy Tenders en 2 bijgerechten naar keuze. Met wie kom jij ‘m delen?`,
        price:20
    }

    
]