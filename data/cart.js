export let cart = JSON.parse(localStorage.getItem('cart')); //get item takes 1 string - the previously named string. JSON.parse reverts it back from a string.

if (!cart) {
    cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];
}; //sets default value if cart is empty, !cart - if there is no cart


function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));

    //local storage can only save strings - first parameter is string name, second parameter is converting cart to a string
}

export function addToCart(productId){
  let matchingItem;    

        //checking if product is already in cart and updating quantity       
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            } //setting values
        });

        //drop down quantity selector
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      const quantity = Number(quantitySelector.value);


        if (matchingItem){
            matchingItem.quantity +=1;
            matchingItem.quantity += quantity;
        } //increasing quantity
        else{  //adding product to cart array
        cart.push({
            productId: productId,
            quantity: 1,
            quantity: quantity
        });
        }

       
    
  saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [] //creates new cart array

    cart.forEach((cartItem) => {
        if (cartItem.productId != productId){
            newCart.push(cartItem);
        }
    }); //if id of product matches id of removed item, do not move that item to new array

    cart = newCart; //updates cart array

    saveToStorage();
}
