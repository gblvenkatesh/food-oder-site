let main = document.querySelector('.main');
let cardCount = document.querySelector('.cartCount');

(function () {
        cardCount.innerHTML = localStorage.getItem('cartCount');
        additems();
})();

let free = [{ item: "Water", price: "Free" }];

function clearCart() {
        localStorage.removeItem('orders');
        localStorage.setItem('orders', JSON.stringify(free));
        localStorage.setItem('cartCount', 0);
        cardCount.innerHTML = localStorage.getItem('cartCount');
        location.reload();
};

function additems() {
        let newElement = document.createElement('div');
        newElement.classList.add('inner');
        let note = JSON.parse(localStorage.getItem("orders"));
        for (let i = 0; i < note.length; i++) {
                newElement.innerHTML += `
                <div class="m-3 row">
                        <h5 class="col-sm-1">${i}.</h5>
                        <h5 class="col-sm-4">${note[i].item}</h5>
                        <div class="col-sm-3 text-center">
                        <input class="bg-transparent border border-3 border-light rounded-3 ps-3 w-100" type="number" placeholder="QTY" value=1>
                        </div>
                        <h5 class="col-sm-3 text-center">₹ ${note[i].price}</h5>
                        <h5 class="col-sm-1">🗑️</h5>
                </div>
                `;
        }
        main.appendChild(newElement);
}



