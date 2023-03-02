const arrListreason=[
    {
        img:"img/Logo & banner/reason_1.png",
        name:"Low Price",
        p:"Everything at here will be cheap, and we often make a sale event every week!",
    },
    {
        img:"img/Logo & banner/reason_2.svg",
        name:"24/7 Support",
        p:"You can contact for us everytime you have problem on our shop. Fast and secure.",
    },
    {
        img:"img/Logo & banner/reason_3.png",
        name:"Hi-quality products",
        p:"Everything at here will be checked by our staff, and we will make sure that everything will have best quality!",
    },
];

let showListreason = (data) =>{
    let result = document.querySelector(".choose");
    result.innerHTML="";
    if(result){
        for (let item of data){
            result.innerHTML +=`
            <div class="reason">
                <div class="reason-img">
                  <img src="${item.img}" alt="">
                </div>
                <div class="reason-details">
                  <h3>${item.name}</h3>
                  <p>${item.p}</p>
                </div>
              </div>
            `;
        }
    }
};
showListreason(arrListreason);


const topProducts = [
    {
        img:"img/Img for product/home-prod1.png",
        name:"Combo Treasure She + Thanh socola Hạnh nhân Fleur de sel",
        price:"339.000 VNĐ",
    },
    {
        img:"img/Img for product/home-prod2.png",
        name:"Socola viên nghệ thuật 10x10cm - Treasure She.",
        price:"190.000 VNĐ",
    },
    {
        img:"img/Img for product/home-prod3.png",
        name:"Hộp 12 viên socola tươi & 1 viên socola nghệ thuật - BST Love is a Gamble",
        price:"420.000 VND ",
    },
    {
        img:"img/Img for product/home-prod4.png",
        name:"Hộp Socola 36 Viên Neapolitans",
        price:"320.000 VNĐ",
    },
];

let showTopProducts = (data) =>{
    let product = document.querySelector(".products")
    product.innerHTML="";
    if(product){
        for (let item of data){
            product.innerHTML +=`
            <div class="prod">
                <a href="">
                  <img src="${item.img}" alt="">
                  <h4>${item.name}</h4>
                  <p>${item.price}</p>
                </a>
            </div>
              `;
        }
    }
};
showTopProducts(topProducts);

