document.querySelector(".ARROWUP").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ------------nav-----------
document.querySelector("#usedcar").addEventListener("click", function() {
    window.location.href = "../UsedCar/UsedCar.html";
});
document.querySelector("#compare").addEventListener("click", function() {
    window.location.href = "../Compare.html";
});
document.querySelector("#sellcar").addEventListener("click", function() {
    window.location.href = "../SellYourCar/SellCar.html";
});
document.querySelector("#navlogo").addEventListener("click", function() {
    window.location.href = "../HomePage.html";
});
// ------------p3------------
const resultsContainer = document.getElementById('resultsContainer');
const listBtn = document.getElementById('listViewBtn');
const gridBtn = document.getElementById('gridViewBtn');

function setView(view) {
    if(view === 'list') {
        resultsContainer.classList.remove('grid-view');
        resultsContainer.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        resultsContainer.classList.remove('list-view');
        resultsContainer.classList.add('grid-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
}
listBtn.onclick = () => setView('list');
gridBtn.onclick = () => setView('grid');
setView('grid');

// -----------------right--------------------
function getCars() {
    try {
        return JSON.parse(localStorage.getItem('cars')) || [];
    } catch (e) {
        return [];
    }
}

function renderCars(cars) {
    resultsContainer.innerHTML = '';
    cars.forEach(car => {
        // Nhận đúng giá trị star và reviews (có thể là 0)
        const star = typeof car.star === "number" ? car.star : 0;
        const reviews = typeof car.reviews === "number" ? car.reviews : 0;

        let starHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (star >= i) {
                starHtml += '<i class="fa fa-star" style="color:#FFF"></i>';
            } else if (star >= i - 0.5) {
                starHtml += '<i class="fa fa-star-half-alt" style="color:#FFF"></i>';
            } else {
                starHtml += '<i class="fa fa-star" style="color:#444"></i>';
            }
        }

        const box = document.createElement('div');
        box.className = 'r3box';
        box.innerHTML = `
            <div class="r31">
                <img src="${car.img}" class="r312">
            </div>
            <div class="r32">
                <p class="r32new">${car.type}</p>
                <p class="r32name">${car.name}</p>
                <p class="r32price">${car.price}</p>
                <p class="r32place">${car.place}</p>
                <div class="r32info">
                    <p class="r32i1">${car.year}</p>
                    <p class="r32i2">${car.driveTrain}</p>
                    <p class="r32i3">${car.fuel}</p>
                    <p class="r32i4">${car.people}</p>
                </div>
                <div class="r32star">
                    ${starHtml}
                    <span style="margin-left:8px; color:#aaa;">(${reviews} Reviews)</span>
                </div>
            </div>
        `;
        resultsContainer.appendChild(box);
    });
}

function filterCars() {
    const cars = getCars();

    const selectedYears = Array.from(document.querySelectorAll('.filter-year:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);

    // Lọc chỉ xe mới
    let filtered = cars.filter(car => car.type === "New");

    if (selectedYears.length) {
        filtered = filtered.filter(car => selectedYears.includes(car.year));
    }
    if (selectedBrands.length) {
        filtered = filtered.filter(car => selectedBrands.some(brand => car.name.toLowerCase().includes(brand.toLowerCase())));
    }

    renderCars(filtered);
}

document.querySelectorAll('.filter-year, .filter-brand').forEach(cb => {
    cb.addEventListener('change', filterCars);
});

filterCars();