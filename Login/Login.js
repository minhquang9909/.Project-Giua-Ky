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
// ---------------left-----------------
document.addEventListener("DOMContentLoaded", function() {
    const passInput = document.getElementById('l2pass1');
    const eyeIcon = document.getElementById('l2pass2');
    let show = false;

    eyeIcon.addEventListener('click', function() {
        show = !show;
        if (show) {
            passInput.type = 'text';
            eyeIcon.src = 'Anh/EyeOpen.png';
        } else {
            passInput.type = 'password';
            eyeIcon.src = 'Anh/EyeClose.png';
        }
    });
});