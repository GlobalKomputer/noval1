// Data produk contoh
const produk = [
    { nama: 'Produk 1', harga: 100000, gambar: 'gambar/baju stussy.png' },
    { nama: 'Produk 2', harga: 150000, gambar: 'gambar/sepatu.png' },
    { nama: 'Produk 3', harga: 200000, gambar: 'gambar/laptop.png' },
    { nama: 'Produk 4', harga: 250000, gambar: 'gambar/ac.png' },
];

// Fungsi untuk menampilkan hasil pencarian
function tampilkanHasilPencarian(produkTerpilih) {
    const hasilPencarian = document.getElementById('search-results');
    hasilPencarian.innerHTML = ''; // Bersihkan hasil pencarian sebelumnya

    if (produkTerpilih.length === 0) {
        hasilPencarian.innerHTML = '<p>Produk tidak ditemukan.</p>';
        return;
    }

    produkTerpilih.forEach(item => {
        hasilPencarian.innerHTML += `
            <div class="product">
                <img src="${item.gambar}" alt="${item.nama}">
                <h3>${item.nama}</h3>
                <p>Rp${item.harga.toLocaleString()}</p>
                <button onclick="tambahKeKeranjang('${item.nama}', ${item.harga})">Tambah ke Keranjang</button>
            </div>
        `;
    });
}

// Fungsi untuk menangani pencarian
function cariProduk(event) {
    event.preventDefault(); // Mencegah form dari refresh halaman

    const query = document.getElementById('search-input').value.toLowerCase();
    const hasil = produk.filter(item => item.nama.toLowerCase().includes(query));

    tampilkanHasilPencarian(hasil);
}

// Event listener untuk form pencarian
document.getElementById('search-form').addEventListener('submit', cariProduk);

// Fungsi untuk menambahkan produk ke keranjang (gunakan yang sudah ada di halaman lain)
function tambahKeKeranjang(namaProduk, harga) {
    // Inisialisasi keranjang jika belum ada
    if (!window.keranjang) {
        window.keranjang = [];
    }

    // Tambahkan item ke keranjang
    window.keranjang.push({ namaProduk, harga });
    alert(`${namaProduk} telah ditambahkan ke keranjang!`);
}
