const showProductdata = [
    {
       img:"img/Img for product/prod-1.jpg",
       name:"Thanh socola Berry in Love",
       price:"100.000 VNĐ",
       id:1, 
    },
    {
        img:"img/Img for product/prod-2.jpg",
        name:"Thanh socola Biscuity Caramels",
        price:"110.000 VNĐ",
        id:2,
    },
    {
        img:"img/Img for product/prod-3.jpg",
        name:"Thanh Socola Việt Nam Single Origin 46% - Milk Chocolate",
        price:"110.000 VNĐ",
        id:3,
     },
     {
         img:"img/Img for product/prod-4.jpg",
         name:"Thanh Socola Ruby - BST 4 seasons",
         price:"130.000 VNĐ",
         id:4,
     },
     {
        img:"img/Img for product/prod-5.jpg",
        name:"Thanh Socola White - BST 4 seasons",
        price:"99.000 VNĐ",
        id:5,
     },
     {
         img:"img/Img for product/prod-6.jpg",
         name:"Thanh Socola Gold - BST 4 seasons",
         price:"130.000 VNĐ",
         id:6,
     },
     {
        img:"img/Img for product/prod-7.jpg",
        name:"Thanh Socola Dark 70% - BST 4 seasons",
        price:"99.000 VNĐ",
        id:7,
    },
    {
        img:"img/Img for product/prod-8.jpg",
        name:"Thanh socola Hạnh nhân Fleur de sel",
        price:"99.000 VNĐ", 
        id:8,
    },
];
// let newProduct = JSON.parse(localStorage.getItem("product"));
// if(newProduct == null) {
//     localStorage.setItem("product",JSON.stringify(showProductdata))
// }
const showProd=(data)=>{
    let product = document.querySelector(".prods");
    product.innerHTML="";
    if(product){
        for (let item of data){
            product.innerHTML +=`
            <div class="products">
                <a href="details.html">
                    <img src="${item.img}" alt="">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </a>
            </div>
            `
        }
    }
}
showProd(showProductdata);