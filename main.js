const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuburger=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const menucarrito=document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer=document.querySelector('#ShoppingCartContainer');

const isOrderMenuclosed= ShoppingCartContainer.classList.contains('inactive');

const cardsContainer=document.querySelector(".cards-container");

const productDetailContainer=document.querySelector("#ProductDetail")

const productDetailIconClose=document.querySelector(".product-detail-close")

menuEmail.addEventListener('click',toggleDesktopMenu);
menuburger.addEventListener('click',toggleMobileMenu);
menucarrito.addEventListener('click',toggleOrderMenu);
productDetailIconClose.addEventListener("click",closeProductDetailAside);

function toggleDesktopMenu(){
    if(!ShoppingCartContainer){
        ShoppingCartContainer.classList.add('inative');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(!isOrderMenuclosed){
        ShoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

}

function toggleOrderMenu(){
    const isMobileMenuclosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed=desktopMenu.classList.contains('inactive');
    if(!isMobileMenuclosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed=productDetailContainer.classList.contains("inactive");
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    if(!isDesktopMenuclosed){
        desktopMenu.classList.add('inactive');
    }
    ShoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive");
    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}
const productList=[];
productList.push({
    name:"bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
productList.push({
    name:"Pantalla",
    price:220,
    image:"https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    })
productList.push({
    name:"computadora",
    price:520,
    image:"https://images.pexels.com/photos/1714340/pexels-photo-1714340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    })

    /*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>*/

function renderProduct(arr)
{
    for (product of arr){
        const productCard=document.createElement("div");
        productCard.classList.add("product-card");
    
        const imageProduct=document.createElement("img");
        imageProduct.setAttribute("src",product.image);
        imageProduct.addEventListener("click",openProductDetailAside)
    
        const productInfo=document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfodiv=document.createElement("div");
    
        const productPrice=document.createElement("p");
        productPrice.innerText="$"+product.price;
    
        const productName=document.createElement("p");
        productName.innerText=product.name;
    
        productInfodiv.appendChild(productPrice);
        productInfodiv.appendChild(productName);
    
        const productFigure=document.createElement("figure");
    
        const productImage=document.createElement("img");
        productImage.setAttribute("src","./icons/bt_add_to_cart.svg");
        
        productFigure.appendChild(productImage);
    
        productInfo.appendChild(productInfodiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(imageProduct);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);

