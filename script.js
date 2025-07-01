// Toggle Class Active
const navbarnav = document.querySelector('.navbar-nav');

// ketika Hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function (e){
    if(!Hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

// --- Load More Button Logic ---

// Cek apakah tombolnya ada di halaman
const loadMoreBtn = document.getElementById('load-more-btn');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default jika tombol ada di dalam form

        // Cari semua kartu yang masih tersembunyi
        const hiddenCards = document.querySelectorAll('.menu-card.hidden-card');

        // Tampilkan 3 kartu berikutnya
        const cardsToShow = 3;
        for (let i = 0; i < cardsToShow; i++) {
            if (hiddenCards[i]) {
                hiddenCards[i].style.display = 'block'; // Tampilkan kartu
                hiddenCards[i].classList.remove('hidden-card'); // Hapus class agar tidak dipilih lagi
            }
        }

        // Jika sudah tidak ada kartu yang tersembunyi, sembunyikan tombol "Load More"
        if (document.querySelectorAll('.menu-card.hidden-card').length === 0) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// --- Search Form & Search Filter Logic ---

// Toggle (tampilkan/sembunyikan) form pencarian
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchIcon = document.querySelector('#search');

searchIcon.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link pindah halaman
    searchForm.classList.toggle('active');
    searchBox.focus(); // Langsung fokus ke input field saat form muncul
});

// Logika untuk filter artikel saat mengetik
const noResultsMessage = document.querySelector('#no-results-message');
const articleCards = document.querySelectorAll('.menu-card');

searchBox.addEventListener('keyup', function() {
    const searchTerm = searchBox.value.toLowerCase();
    let cardsFound = 0;

    articleCards.forEach(card => {
        // Ambil judul artikel dari setiap kartu
        const cardTitle = card.querySelector('.menu-card-title').textContent.toLowerCase();
        
        // Cek apakah judul mengandung kata yang dicari
        if (cardTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Tampilkan kartu jika cocok
            cardsFound++;
        } else {
            card.style.display = 'none'; // Sembunyikan kartu jika tidak cocok
        }
    });

    // Tampilkan atau sembunyikan pesan "tidak ditemukan"
    if (cardsFound > 0) {
        noResultsMessage.classList.add('hidden');
    } else {
        noResultsMessage.classList.remove('hidden');
    }
});