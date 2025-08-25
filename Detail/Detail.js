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
document.querySelector(".login1").addEventListener("click", function() {
    window.location.href = "../Login/Login.html";
});
// ------------p3------------
document.addEventListener("DOMContentLoaded", function() {
    const smallPics = Array.from(document.querySelectorAll('.p32p'));
    const mainPic = document.querySelector('.p31m');
    const leftBtn = document.querySelector('.p31l');
    const rightBtn = document.querySelector('.p31r');
    let i = 0;

    function updateMainPic() {
        mainPic.src = smallPics[i].src;
    }

    leftBtn.addEventListener('click', function() {
        i = (i - 1 + smallPics.length) % smallPics.length;
        updateMainPic();
    });

    rightBtn.addEventListener('click', function() {
        i = (i + 1) % smallPics.length;
        updateMainPic();
    });

    smallPics.forEach((img, idx) => {
        img.addEventListener('click', function() {
            i = idx;
            updateMainPic();
        });
    });

    updateMainPic();
});

document.addEventListener("DOMContentLoaded", function() {
    const desc = document.querySelector('.p4l1text');
    const btn = document.querySelector('.p4l1rm');
    if (desc && btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            desc.classList.toggle('expanded');
            btn.textContent = desc.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    }
});