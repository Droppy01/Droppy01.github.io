class productcCompunent {
    constructor(product, id) {
        this.name = product.name;
        this.img = product.img;
        this.price = product.price;
        this.id = id;
        this.createElement();
    }
    createElement() {
        this.Element = document.createElement("section");
        this.Element.innerHTML =
`
<img src="${this.img}">
<h3>${this.name}</h3>
<p>€${this.price}</p>
<button class=\"button\" id=\"${this.id}\">details</button>
`;
    }
    getElement(){
        return( this.Element);
    }

    
}