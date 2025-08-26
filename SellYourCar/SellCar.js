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
document.querySelector("#navlogo").addEventListener("click", function() {
    window.location.href = "../HomePage.html";
});
// ------------p3------------
document.querySelectorAll('.p3option').forEach(optionBox => {
    optionBox.addEventListener('click', function(e) {
        if (e.target.classList.contains('p3o2')) {
            const input = optionBox.parentElement.querySelector('.p3211');
            input.value = e.target.textContent;
            optionBox.style.display = 'none';
        }
    });
});

document.querySelectorAll('.p3211').forEach(input => {
    input.addEventListener('focus', function() {
        const optionBox = input.nextElementSibling;
        if (optionBox && optionBox.classList.contains('p3option')) {
            optionBox.style.display = 'flex';
        }
    });
    input.addEventListener('blur', function() {
        setTimeout(() => {
            const optionBox = input.nextElementSibling;
            if (optionBox && optionBox.classList.contains('p3option')) {
                optionBox.style.display = 'none';
            }
        }, 200);
    });
});

document.querySelectorAll('.p3o1').forEach(searchInput => {
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        searchInput.parentElement.querySelectorAll('.p3o2').forEach(option => {
            option.style.display = option.textContent.toLowerCase().includes(filter) ? 'flex' : 'none';
        });
    });
});


document.querySelectorAll('.p3counter').forEach(counter => {
    const input = counter.querySelector('.p3input');
    const [minus, plus] = counter.querySelectorAll('.p3btn');
    minus.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val > 1) input.value = val - 1;
    });
    plus.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        input.value = val + 1;
    });
});