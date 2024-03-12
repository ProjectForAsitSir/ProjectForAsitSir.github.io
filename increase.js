document.addEventListener("DOMContentLoaded", function() {
    var ids = document.querySelector('.ids');
    var line = document.getElementById("line");
    var startHeight = 0; 
    var endHeight = 10;  

    function updateLineHeight() {
        var scrollPercentage = window.scrollY / (document.body.clientHeight - window.innerHeight);
        var currentHeight = startHeight + (endHeight - startHeight) * scrollPercentage;
        line.style.height = currentHeight + "cm";
        line.style.top = startPos + "px"; 
    }

    window.addEventListener("scroll", function() {
        updateLineHeight();
    });
});

