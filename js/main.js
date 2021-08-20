const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art")
// description & price
const desc = document.getElementById("desc");
const price = document.getElementById("price");

// shipping var

const free = document.getElementById("free");
const express = document.getElementById("express")

const shippingField = document.getElementById("shipping");
const total = document.getElementById("total");
// shipping event listener
free.addEventListener("click", function(){
    shippingField.innerText = "5";
    updateTotal();
});

// express shipping
express.addEventListener("click", function(){
    shippingField.innerText = "30";
    updateTotal();
});

// update total 
function updateTotal(){
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}

div1.addEventListener("click", function() {
    // changing img
    img.src = "images/1.jpg";
    // changing description
    desc.innerText = "First-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, veniam ad soluta est, corrupti repellat temporibus provident accusamus deleniti facere non assumenda? Pariatur, expedita ipsum?";
    // price
    price.innerText = "750";
    //update total
    updateTotal();

})
div2.addEventListener("click", function() {
    // changing img

    img.src = "images/2.jpg";
    // changing description


    desc.innerText = "First-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, veniam ad soluta est, corrupti repellat temporibus provident accusamus deleniti facere non assumenda? Pariatur, expedita ipsum?";
    // changing price
    price.innerText = "550";
    // update total 
    updateTotal();
})
div3.addEventListener("click", function() {
    // image change
    img.src = "images/3.jpg";
    // description

    desc.innerText = "First-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, veniam ad soluta est, corrupti repellat temporibus provident accusamus deleniti facere non assumenda? Pariatur, expedita ipsum?";
    // price
    price.innerText = "330";
    // update total
    updateTotal();
})