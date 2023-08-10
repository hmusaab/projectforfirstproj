const products = [...document.querySelectorAll('.products')];
const nxtbtn = [...document.querySelectorAll('.nextbtn')];
const prevbtn = [...document.querySelectorAll('.prevbtn')];

products.forEach((items,i)=>{
    let productsDimension = items.getBoundingClientRect();
    let productsWidth = productsDimension.width;
    nxtbtn[i].addEventListener('click',()=>{
        items.scrollLeft += productsWidth;
    })
    
    prevbtn[i].addEventListener('click',()=>{
        items.scrollLeft -= productsWidth;
    })

})


