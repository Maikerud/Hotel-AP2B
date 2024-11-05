// Elemen-elemen untuk carousel hotel
const hotelGrid = document.getElementById("hotelGrid");
const hotelCards = document.querySelectorAll(".hotel-card");
const buttonLeft = document.querySelector(".carousel-button.left");
const buttonRight = document.querySelector(".carousel-button.right");

let currentIndex = 0;
const cardWidth = 95; // Sesuaikan dengan lebar penuh kartu + margin
const totalCards = hotelCards.length;
const visibleCards = 4; // Jumlah kartu yang terlihat sekaligus
const maxIndex = totalCards - visibleCards; // Batas maksimum indeks

// Fungsi untuk memperbarui transformasi hotelGrid
function updateCarousel() {
  hotelGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Event listener untuk tombol kiri
buttonLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex; // Kembali ke ujung kanan
  }
  updateCarousel();
});

// Event listener untuk tombol kanan
buttonRight.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // Kembali ke awal
  }
  updateCarousel();
});

// Konfigurasi Swiper untuk slider "tranding"
const trandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
