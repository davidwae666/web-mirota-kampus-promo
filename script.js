// Countdown Timer (3 hari, 0 jam, 0 menit, 0 detik)
const countDownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 hari dari sekarang

// Update countdown setiap 1 detik
const timerElement = document.getElementById('timer');
const hoursElement = document.createElement('span');
const minutesElement = document.createElement('span');
const secondsElement = document.createElement('span');

timerElement.appendChild(hoursElement);
timerElement.appendChild(minutesElement);
timerElement.appendChild(secondsElement);

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Menampilkan hasil dalam elemen timer
    hoursElement.innerHTML = hours + "h ";
    minutesElement.innerHTML = minutes + "m ";
    secondsElement.innerHTML = seconds + "s ";

    // Menambahkan animasi rotasi pada setiap angka
    hoursElement.style.animation = 'rotate 1s linear infinite';
    minutesElement.style.animation = 'rotate 1s linear infinite';
    secondsElement.style.animation = 'rotate 1s linear infinite';

    // Jika waktu habis, tampilkan pesan
    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "Promo telah berakhir!";
    }
}, 1000);
