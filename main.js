(function() {
    const scrollbar = document.querySelector(".scrollbar");
    const scrollbarContent = scrollbar.querySelector(".scrollbar__content");
    const body = document.body;
    const totalHeight = body.clientHeight;
    const windowHeight = window.innerHeight;
    const html = document.documentElement;
    const percentage = (totalHeight - windowHeight) / (scrollbarContent.clientHeight - scrollbar.clientHeight);
    
    let isScrolling = false;
    let timeout;
    
    function scheduleScrollUpdate() {
        if (!isScrolling) {
            isScrolling = true;
            // Update the scrollbar
            updateScrollbar();
        }
    
        // Clear any previously scheduled update
        clearTimeout(timeout);
    
        // Schedule an update 200 milliseconds in the future
        timeout = setTimeout(function() {
            isScrolling = false;
        }, 8);
    }
    
    function updateScrollbar() {
        const CustomScrollPosition = scrollbar.scrollTop;
        window.scrollTo(0, percentage * CustomScrollPosition);
    }
    
    scrollbar.addEventListener("scroll", function() {
        scheduleScrollUpdate();
    });
    
    window.addEventListener("scroll", function() {
        scrollbar.scrollTop = html.scrollTop / percentage;
    });
})();