let sidebar_cart = document.getElementById("sidebar_cart");
let order_btn = document.getElementById("order_btn");
let main_body = document.getElementById("main_body");
order_btn.addEventListener("click", ()=>{
    sidebar_cart.classList.toggle("active");
    main_body.classList.toggle("active");
})


