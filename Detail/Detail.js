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
