document.addEventListener("DOMContentLoaded", function () {
    let cars = [];
    try {
        cars = JSON.parse(localStorage.getItem('cars')) || [];
    } catch (e) {
        cars = [];
    }

    function isDuplicate(newCar) {
        return cars.some(car =>
            car.name === newCar.name && car.year === newCar.year
        );
    }

    document.querySelectorAll('.r32').forEach(carEl => {
        // Tìm phần tử cha .r3box
        const r3box = carEl.closest('.r3box');
        // Lấy ảnh .r312 trong .r3box
        const imgEl = r3box ? r3box.querySelector('.r312') : null;
        const newCar = {
            type: carEl.querySelector('.r32new')?.innerText.trim() || "",
            name: carEl.querySelector('.r32name')?.innerText.trim() || "",
            price: carEl.querySelector('.r32price')?.innerText.trim() || "",
            place: carEl.querySelector('.r32place')?.innerText.trim() || "",
            year: carEl.querySelector('.r32i1')?.innerText.trim() || "",
            driveTrain: carEl.querySelector('.r32i2')?.innerText.trim() || "",
            fuel: carEl.querySelector('.r32i3')?.innerText.trim() || "",
            people: carEl.querySelector('.r32i4')?.innerText.trim() || "",
            img: imgEl ? imgEl.getAttribute('src') : "",
            star: 4,
            reviews: 12
        };
        if (newCar.name && newCar.year && !isDuplicate(newCar)) {
            cars.push(newCar);
        }
    });

    // Lưu lại vào localStorage
    localStorage.setItem('cars', JSON.stringify(cars));
});

console.log(JSON.parse(localStorage.getItem('cars') || '[]'));
