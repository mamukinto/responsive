var nav = document.getElementById("nav");
var cart = document.getElementById("cart");
var j = 1;
var i = 1;

function toggleNav() {
    i++;    
    if (i%2===0) {
        nav.classList.remove("closeNav");
        nav.classList.add("openNav");
        nav.style.left = "0";
    }
    else {
        nav.classList.remove("openNav");
        nav.classList.add("closeNav");
        nav.style.left = "-50%";
    }
}

function toggleCart() {
    j++
    if (j%2===0) {
        cart.classList.remove("closeCart");
        cart.classList.add("openCart");
        cart.style.right = "0";
    }
    else {
        cart.classList.remove("openCart");
        cart.classList.add("closeCart");
        cart.style.right="-50%"
    }
}


