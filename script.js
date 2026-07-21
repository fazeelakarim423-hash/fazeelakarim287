window.addEventListener("scroll", function () {
    const btn = document.getElementById("topBtn");

    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

document.getElementById("topBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});
