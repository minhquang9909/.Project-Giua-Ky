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