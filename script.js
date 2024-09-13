// Mendapatkan elemen dari DOM
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

// Data keranjang belanja (dapat disimpan di Local Storage dalam aplikasi nyata)
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Fungsi untuk menampilkan item keranjang
function renderCartItems() {
    cartList.innerHTML = ''; // Kosongkan list sebelum diisi ulang
    let total = 0;
    
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - Rp${item.price.toLocaleString()} x ${item.quantity}
            <button onclick="removeItem('${item.name}')">Hapus</button>
        `;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotal.innerText = `Total: Rp${total.toLocaleString()}`;
}

// Fungsi untuk menambah item ke keranjang
function addToCart(name, price) {
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

// Fungsi untuk menghapus item dari keranjang
function removeItem(name) {
    cartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

// Render item saat halaman dimuat
renderCartItems();
