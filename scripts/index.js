const menuHam = document.querySelector('.nav');
const navLinks = document.querySelector('.headerLinks');

menuHam.addEventListener('click', () => {
    navLinks.classList.toggle('mobi')
});

let tanggal = document.getElementById('dt');

let waktuSekarang = new Date();

let tanggalFotmat = waktuSekarang.toISOString().slice(0,10).replace(/-/g, '.');

tanggal.innerHTML = tanggalFotmat;

var date = new Date();

var tggl = date.getDate();

document.getElementById('dt2').innerHTML = tggl;

var data = new Date();

var month = data.getMonth() + 1

document.getElementById('dt3').innerHTML = month;
