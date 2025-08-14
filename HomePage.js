document.querySelector(".ARROWUP").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ------------nav-----------
document.querySelector("#usedcar").addEventListener("click", function() {
    window.location.href = "UsedCar/UsedCar.html";
});
document.querySelector("#compare").addEventListener("click", function() {
    window.location.href = "Compare.html";
});
document.querySelector("#sellcar").addEventListener("click", function() {
    window.location.href = "SellYourCar/SellCar.html";
});
document.querySelector("#navlogo").addEventListener("click", function() {
    window.location.href = "HomePage.html";
});
// ------------p3------------
document.querySelectorAll('.p3dot-item').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.p3dot-item').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        const imgUrl = this.getAttribute('data-img');
        document.querySelector('.Banner').src = imgUrl;
    });
});


document.querySelectorAll('.p3t').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.p3t').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});


const minRange = document.getElementById('minPrice');
const maxRange = document.getElementById('maxPrice');
const priceValue = document.getElementById('priceRangeValue');

function formatPrice(val) {
    return '$' + Number(val).toLocaleString();
}

function updatePriceRange() {
    let min = Math.min(Number(minRange.value), Number(maxRange.value) - 1000);
    let max = Math.max(Number(maxRange.value), Number(minRange.value) + 1000);
    minRange.value = min;
    maxRange.value = max;
    priceValue.textContent = `${formatPrice(min)} - ${formatPrice(max)}`;
}

if (minRange && maxRange && priceValue) {
    minRange.addEventListener('input', updatePriceRange);
    maxRange.addEventListener('input', updatePriceRange);
    updatePriceRange();
}

// ------------p4------------------
document.querySelectorAll('p.p421').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.p421').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});
document.querySelector(".p422").addEventListener("click", function() {
    window.location.href = "SearchResult/SearchResult.html";
});
// --------------p6------------------
document.querySelectorAll('.p611').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.p611').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.p611').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.p611').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelector("#news").addEventListener("click", function() {
    document.querySelector("#newsBox").classList.remove("inactive");
    document.querySelector("#reviewsBox").classList.add("inactive");
});
document.querySelector("#reviews").addEventListener("click", function() {
    document.querySelector("#reviewsBox").classList.remove("inactive");
    document.querySelector("#newsBox").classList.add("inactive");
});

// ------------p8------------------
document.querySelectorAll('.p82box').forEach((box, idx) => {
    box.addEventListener('click', function() {
        if (idx === 0) {
            window.location.href = "NewCar/NewCar.html";
        } else if (idx === 1) {
            window.location.href = "UsedCar/UsedCar.html";
        } else if (idx === 2) {
            window.location.href = "SellYourCar/SellCar.html";
        }
    });
});