document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleSwitch = document.getElementById('theme-toggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Icon Replacement (assuming this is part of a discourse plugin or similar environment)
    if (typeof api !== 'undefined' && api.replaceIcon) {
        api.replaceIcon('fab-twitter', 'temporary-twitter-x');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading process
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // 3 seconds loading time
});
