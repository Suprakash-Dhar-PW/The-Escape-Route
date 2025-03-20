function toggleReadMore() {
    var moreText = document.getElementById("read-more");
    var readMoreBtn = document.getElementById("more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = " Read Less";
        moreText.style.color = "#201f1f";
    }
    else {
        moreText.style.display = "none";
        readMoreBtn.textContent = " Read More";
    }
}   