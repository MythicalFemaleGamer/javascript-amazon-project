console.log("Main idea of Javascript: Save the data, generate html, make it interactive");

//saving the data in a data structure (array of objects) to make it easier to manipulate and display on the page
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         stars: 4.5,
//         count: 87
//     },
//     priceCents: 1090 //saved as cents to avoid floating point issues
// }, {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating:{
//         stars:4,
//         count: 127
//     },
//     priceCents: 2095
// },{
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         stars: 4.5,
//         count: 56
//     },
//     priceCents:799
// },{
//     image: 'images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot Toaster - Black',
//     rating:{
//         stars: 5,
//         count: 2197
//     },
//     priceCents: 1899
// },

// ];

//generating HTML from data and inserting it into the page
let productsHTML = '';


//generating HTML from data

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary"
          data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
});
// console.log(productsHTML);

//using DOM manipulation to insert the generated HTML into the page

document.querySelector('.products-grid').innerHTML = productsHTML;
//changing the html inside products-grid to new html

//interactivity: adding event listeners to buttons to show "Added to Cart" message when clicked

document.querySelectorAll('.add-to-cart-button').forEach((button) => { 
    button.addEventListener('click', () => {
        
        //adding objects to cart
        //first added data attribute to add-to-cart button so cart knows what thing to add to cart: 'data-any-name = "${value}"

        //get product name
        const productId = button.dataset.productId; //grabs the value of data-product-Id attribute and saves it in productId variable

        // console.log(button.dataset); //grabs all data attributes attached to button
        // console.log(button.dataset.productName); //just grabs product name

         //grabbing product name can cause problems as multiple things can have same name, use a unique ID instead

        let matchingItem;

        //checking if product is already in cart and updating quantity       
        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;
            } //setting values
        });
        if (matchingItem){
            matchingItem.quantity +=1;
        } //increasing quantity
        else{  //adding product to cart array
        cart.push({
            productId: productId,
            quantity: 1,
        });

        }

      
        console.log(cart);
    });
});