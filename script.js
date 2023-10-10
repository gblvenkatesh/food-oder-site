let orders = [{item: "Water", price: "Free"}];
let count = document.querySelector('.cartCount');

(function(){
        count.innerHTML = localStorage.getItem('cartCount');
})();

function callCard(item, price){
        if(orders !== null){
                orders = JSON.parse(localStorage.getItem('orders'));
        }


        orders.push({item, price});
        localStorage.setItem('orders', JSON.stringify(orders));
        count.innerHTML++;
        localStorage.setItem('cartCount',count.innerHTML);
};
































// let cartCount = document.querySelector('.cartCount');

// (function () { 
//         cartCount.innerHTML = localStorage.getItem("cart");
//  })();

// const callCard = (item, price) => {
//         let yourOrder = { item, price };
//         orders.push(yourOrder);
//         console.log(orders);
//         cartCount.innerHTML++;
//         localStorage.setItem("cart",cartCount.innerHTML);
//         localStorage.setItem("currentOrdersList",JSON.stringify(orders));
// }

// function clearCart() {
//         localStorage.setItem("cart", "0");
//         localStorage.setItem("currentOrdersList", "");
//         main.innerHTML = localStorage.getItem("currentOrdersList");
//         cartCount.innerHTML = localStorage.getItem("cart");
// }

// (function () { 
//         cartCount.innerHTML =+ localStorage.getItem("cart");
//  })();


























// `
// <div id="price">
// <h1 class="card_heading">HGFoods.</h1>
// <br>
// <br>
// <h1>YOUR ORDER</h1>
// <br>
// <div class="bill mb-5">
//         <table class="table"> 
//                 <thead>
//                         <tr>
//                                 <th>S.No</th>
//                                 <th>Item</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                                 <th>Total</th>
//                         </tr>
//                 </thead>
//                 <tbody class="table-body">
//                         <tr>
                              
//                         </tr>
//                 </tbody>
//         </table>
// </div>


// <div id="btn">
//         <button class="btn btn-light">BACK</button>
//         <input type="submit" value="SUBMIT" class="btn btn-light">
// </div>
// </div>`





// total.innerHTML = 0;
// quantity.value = 0;


// const callCard = (item, price) => {
//         document.querySelector('.foods').setAttribute('style', "display:none")
//         document.querySelector('.all_items').setAttribute('style', "display:none")
//         document.querySelector('#price_card').setAttribute('style', "display:flex")
//         ordered_item.innerHTML = item.toUpperCase();
//         price_item.innerHTML = price;
// }

// const goBack = () => {
//         document.querySelector('.foods').setAttribute('style', "display:grid")
//         document.querySelector('.all_items').setAttribute('style', "display:grid")
//         document.querySelector('#price_card').setAttribute('style', "display:none")
//         submit.innerHTML = "CONFORM"
//         total.innerHTML = 0;
//         quantity.value = "";
// }



// const conform = () => {
//         if (quantity.value > 0 && quantity.value <= 10) {
//                 console.log(quantity.value);
//                 submit.innerHTML = "ORDER";
//                 total.innerHTML = price_item.innerHTML * quantity.value;
//         } else {
//                 console.log(quantity.value);
//                 alert("Please,\nEnter the valid quantity (min = 1, max = 10)");
//                 submit.innerHTML = "CONFORM"
//         }
// }



