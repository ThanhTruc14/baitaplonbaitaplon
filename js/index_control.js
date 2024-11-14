let suaruamat = document.getElementById('Sofa');
let son = document.getElementById('Bàn ăn');
let kemduongda = document.getElementById('Giường ngủ');
let phan = document.getElementById('Bàn làm việc');
let kemchongnang = document.getElementById('Đèn trang trí');

suaruamat.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
son.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  
kemduongda.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
phan.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
kemchongnang.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}